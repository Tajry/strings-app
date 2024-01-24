import Post from "@/app/components/Post";
import { sql } from "@/db";
import React from 'react'


async function getData() {
    const res = await sql(
        `select p.* , u.avatar , u.username from posts p inner join users u
        on p.user_id = u.id order by created_at desc limit 10`
    )

    return res.rows;
}



export default async function PublicFeed() {

    const posts = await getData()


  return (
    <main>
        <h1>Strings</h1>
        <div>
            <h2>Recen posts from the comumity</h2>
            {posts.map((post:PostI)=> {
                return <Post post={post} key={post.id} />
            })}
        </div>
    </main>
  )
}
