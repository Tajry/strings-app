import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(requst:Request , {params}:{params:{id:number}}) {
    const jwtPlayload = await getJWTPayload();
    const res = await sql("select * from posts where id = $1 and user_id = $2",
    [params.id ,jwtPlayload.sub]
    )

    if (res.rowCount == 0) {
        return NextResponse.json({error:'not found'} ,{status:404}) 
    }

    return NextResponse.json({data:res.rows[0]})
}


export async function PATCH(request:Request , {params}:{params:{id:number}}) {
    const body = await request.json();
    const jwtPlayload = await getJWTPayload()
    const res = await sql("select * from posts where user_id = $1 and id = $2 ",
    [jwtPlayload.sub , params.id ]
    )
    // console.log(body)
    if (res.rowCount == 0) {
        return NextResponse.json({error:'not found'} ,{status:404}) 
    }
    await sql("update posts set content =  $1 where user_id = $2 and id = $3 " ,
    [body.content , jwtPlayload.sub , params.id]
    )
    return NextResponse.json({msg:"update success "},{status:200})
}


export async function DELETE(request:Request , {params}:{params:{id:number}}) {
    const jwtPlayload = await getJWTPayload()
    const res  = await sql("delete from posts where id = $1 and user_id = $2" ,
        [jwtPlayload.sub , params.id]
    )
    if (res.rowCount == 0) {
        return NextResponse.json({msg:'delete success'})
    }else {
        return NextResponse.json({error:'not found'} ,{status:404}) 
    }
}