import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function DELETE(request:Request , {params}:{params:{user_id:number}}) {
    const jwtPlayload = await getJWTPayload();
    const userId = params.user_id

    const res = await sql(

        'delete from follows  where user_id = $1 and follower_Id = $2 ' ,
        [userId , jwtPlayload.sub]
    )

    if (!res) {
        return NextResponse.json({msg:"error"})

    }

    return NextResponse.json({msg:"unfollower success"})
}