import { Client } from "pg";

import { loadEnvConfig } from "@next/env";
const projectdir = process.cwd();
loadEnvConfig(projectdir);

export async function getClient() {
    const client = new Client({
        user: process.env.POSTGRES_USER,
        host:process.env.POSTGRES_HOST,
        database:process.env.POSTGRES_NAME,
        password:process.env.POSTGRES_PASSWORD,
        port:5432
    });

    return client;
}