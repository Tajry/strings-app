
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
// import useSWR, { useSWRConfig } from 'swr';

export default function Form({posts}:{posts:PostI}) {
    const router = useRouter();
    const [content , setContent] = useState(posts.content);

    async function handleSubmit(e:FormEvent) {
        e.preventDefault();


        const res = await fetch('/api/posts/'+posts.id ,{
            method:'PATCH',
            body:JSON.stringify({content:content})
        })

        if (res.ok) {
            setContent("")
            router.push('/profile')
        }
    
    }


    return (
        <form onSubmit={handleSubmit}>
            <textarea 
            className='bg-gray-700 p-2 rounded-lg w-full my-2' 
            placeholder='wat is heppenting?'
            onChange={(e)=>setContent(e.target.value)}
            value={content}
            ></textarea>
            <button type='submit' className='bg-slate-900 p-2 rounded-lg'>Update Post</button>
        </form>
    )
}
