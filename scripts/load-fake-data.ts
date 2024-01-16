import { Client } from "pg";
import { loadEnvConfig } from "@next/env";
import {faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const projectdir = process.cwd();
loadEnvConfig(projectdir);

async function loadFakeData(numUser: number = 10) {
    console.log("eucte load fake daa .generting "+ numUser + "users" );


    const client = new Client({
        user: process.env.POSTGRES_USER,
        host:process.env.POSTGRES_HOST,
        database:process.env.POSTGRES_NAME,
        password:process.env.POSTGRES_PASSWORD,
        port:5432
    });

    await client.connect()

    try {
        await client.query('begin');

        for (let i = 0;i< numUser ;i++) {
            const saltRounds = 10 ;
            const hash = await bcrypt.hash('strings123', saltRounds);

            await client.query("insert into public.users(username ,password ,avatar) values($1 ,$2 ,$3 )",
            [faker.internet.userName(),hash,faker.image.avatar()])
        }


        const res = await client.query(
            "select id from users order by created_at desc limit $1",
            [numUser]
        );

        console.log(res.rows);


        for(const row of res.rows) {
            for (let i = 0; i< Math.ceil(Math.random() * 50); i++) {
                await client.query(
                    "insert into public.posts (user_id ,content) values($1 ,$2)",
                    [row.id ,faker.lorem.sentence()]
                )
            }
        }


        for(const row1 of res.rows) {
            for(const row2 of res.rows) {
                if (row1.id != row2.id) {
                    if (Math.random() > 0.5) {
                        await client.query(
                            "insert into follows (user_id ,follower_id) values($1 ,$2)",
                            [row1.id ,row2.id]
                        )
                    }
                }
            }
        }

        await client.query('commit');
    }catch (error) {
        await client.query("rollback");
        throw error

    }finally {
        await client.end();
    }





}

let numUser = parseInt(process.argv[2]) || 10;

loadFakeData(numUser);