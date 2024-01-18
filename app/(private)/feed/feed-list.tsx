
import React from 'react'
import useSWR from 'swr'

export default function FeedList({index}:{index:number}) {

    const {data ,error ,isLoading} = useSWR('/api/posts/feed?page='+index)
    if (error) return  <div>failed to load</div>
    if (isLoading) return <div>loading....</div>
    return (
        <div>
            {data.data.map((post:PostI)=>{
                return (
                    <li>{post.content}</li>
                )
            })}
        </div>
    )
}
