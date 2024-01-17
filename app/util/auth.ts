import { jwtVerify } from 'jose';
import {cookies} from 'next/headers';

export async function getJWTPayload() {
    const cookieStore = cookies()
   
    const token = await cookieStore.get('jwt-token')
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'my-jwt-secret');
    const {payload , protectedHeader} = await jwtVerify(token?.value! ,secret)

    return payload;
}
