import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(requst:Request) {
    // การรับ url จะไม่เหมือนที่วไป 
    const jwtPlayload = await getJWTPayload(); 
    const {searchParams} = new URL(requst.url) // get url
    const username = searchParams.get('username') // get name query string from url
    const page = (searchParams.get('page') && parseInt(searchParams.get('page')!)) || 0 // get page qury string from url

    const limit = 3 ;
    const offset = page * 3 ;


    const statemet = `select p.* , u.avatar , u.username 
    from posts p inner join users u
    on p.user_id = u.id where user_id = $1
    order by created_at desc limit $2 offset $3`

    if (username) {
        // TODO
    }

    const res = await sql(statemet , [jwtPlayload.sub , limit ,offset])

    return NextResponse.json({data:res.rows})
}