import { Client, Query, QueryResult } from "pg";

import { loadEnvConfig } from "@next/env";
const projectdir = process.cwd();
loadEnvConfig(projectdir);

export async function getClient() : Promise<Client>{
    if (process.env.POSTGRES_URL) {
        const client = new Client({
            connectionString: process.env.POSTGRES_URL + "?sslmode=require",
        })
        return client;
    }
    const client = new Client({
        user: process.env.POSTGRES_USER,
        host:process.env.POSTGRES_HOST,
        database:process.env.POSTGRES_NAME,
        password:process.env.POSTGRES_PASSWORD,
        port:5432
    });

    return client;
}



export async function sql(sql:string ,values?:Array<any>) : Promise<QueryResult<any>> {
    const client = await getClient();
    await client.connect();
    const res = await client.query(sql,values);
    await client.end();
    return res;
}