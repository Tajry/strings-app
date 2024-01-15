import { Client } from "pg";
import { loadEnvConfig } from "@next/env";


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
    await client.connect();

    const res = await client.query("select 1")

    console.log(res)

    await client.end();
}


loadFakeData();