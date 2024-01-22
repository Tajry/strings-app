import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function DELETE({params}:{params:{user_id:number}}) {
    const jwtPlayload = await getJWTPayload();
    const userId =  params.user_id
    console.log(userId)
    await sql(
        "delete from follows where user_id  = $1 and follower_id = $2",
        [userId , jwtPlayload.aud]
    )


    return NextResponse.json({msg:"unfollower success"})
}