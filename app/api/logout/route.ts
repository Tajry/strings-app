import { NextResponse } from "next/server";

export async function GET(request:Request) {
    const respone = NextResponse.json({msg:'logout success'});
    respone.cookies.set("jwt-token", "")
    return respone;
}