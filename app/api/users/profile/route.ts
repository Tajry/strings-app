import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
    // get currntly logged in uer
    const jwtPayload = await getJWTPayload()

    // fetch user data 
    const res  = await sql(
        "select id , username ,avatar from public.users where id = $1",
        [jwtPayload.sub]
    )
    // if(res.rowCount == 0) {
    //     return NextResponse.json({msg:'no data'},{status:404})
    // }
    const user =  await  res.rows[0]

    // return user data
    return NextResponse.json({data:user})
}