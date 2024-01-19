import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(requst:Request) {
    // การรับ url จะไม่เหมือนที่วไป 
    const jwtPlayload = await getJWTPayload(); 
    const {searchParams} = new URL(requst.url) // get url
    const username = searchParams.get('username') // get name query string from url
    const page = (searchParams.get('page') && parseInt(searchParams.get('page')!)) || 0 // get page qury string from url
    // console.log(username)
    const limit = 3 ;
    const offset = page * 3 ;


   
    const statement = `select p.*, p.created_at , u.avatar, u.username
    from posts p inner join users u
    on p.user_id = u.id where user_id = $1
    order by created_at desc  limit $2 offset $3`;

    
    if (username) {
        // TODO
    }

    const res = await sql(statement , [jwtPlayload.sub , limit ,offset])
    console.log(res.rows[0])

    return NextResponse.json({data:res.rows})
}


export async function POST(request:Request) {
    const json = await request.json();
    const content = json.content
    const jwtPlayload = await getJWTPayload();


    const res = await sql("insert into posts(user_id  , content) values ($1 ,$2) returning * ",
    [jwtPlayload.sub, content]
    )


    return NextResponse.json({data:res.rows[0]},{status:201})
}