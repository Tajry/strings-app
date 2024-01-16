
import { getClient } from '@/db';
import bcrypt from 'bcrypt';

async function  loadAdminUser(username:string  , password:string) {


    const clent = await getClient();


    console.log("username "+username)
    console.log("password "+password)
}

let username = process.argv[2]
let password = process.argv[3]
loadAdminUser(username , password )