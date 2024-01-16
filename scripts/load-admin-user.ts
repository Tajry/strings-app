
import { getClient } from '@/db';
import bcrypt from 'bcrypt';

async function  loadAdminUser(username:string  , password:string) {

    const saltRounds = 10;
    const hash = bcrypt.hash(username ,saltRounds);
    

    const client = await getClient();
    await client.connect();
    await client.query(
        "insert into public.users(username ,password ,is_admin) values($1,$2 ,$3)",
        [username ,hash ,true]
    )

    await client.end()
    
}

let username = process.argv[2]
let password = process.argv[3]
loadAdminUser(username , password )