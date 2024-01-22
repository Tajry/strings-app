import { getJWTPayload } from "@/app/util/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
    const jwtPlayload = await getJWTPayload();
    const {searchParams} = new URL(request.url);
    const userId = searchParams.get('user_id');

    const res  = await sql(
        "select * from follows where user_id = $1 and follower_id = $2",
        [userId , jwtPlayload.sub]
    )

    return NextResponse.json({data:res.rows})
}