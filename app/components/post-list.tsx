import React from 'react'
import useSWR from 'swr'
import Post from './Post'

export default function PostList({index ,username}:{index:number,username:string}) {
    const {data ,error ,isLoading} = useSWR(() => "/api/posts?page="+index+"&username="+username)

    // console.log(data)
    if (error) return <div>failed to load</div>
    if (isLoading || !data) return <div>load....</div>
  
  return (
    <ul>
        {data.data.map((post:PostI)=>{
            return (
                <li key={post.id}>
                    <Post post={post}  />
                </li>
            )
        })}
    </ul>
  )
}
