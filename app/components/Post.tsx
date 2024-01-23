import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Post({post , showEditBtn}:{post:PostI , showEditBtn?:boolean}) {

    const options:Intl.DateTimeFormatOptions = {
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:"numeric",
        minute:'numeric'
    }

    const craeatAt = new Date(post.created_at)
  return (
    
    <div className='flex flex-row '>
        <div>
            {post.avatar && (
                <Link href={`/${post.avatar}`}>
                    <Image 
                        src={post.avatar}
                        width={50}
                        height={50}
                        alt={post.username}
                        className='rounded-full mr-3'
                    />
                </Link>
            )}
            {!post.avatar && (
                <div className='bg-slate-600 rounded-full mr-3' style={{width:50 , height:50 }}></div>
            )}
        </div>

        <div className='flax flex-col max-w-xs'>
            <div className='font-bold'>
                <Link href={`/${post.username}`}>{post.username}</Link>
            </div>
            <div className='text-slate-400'>
                {craeatAt.toLocaleDateString('en-us',options)}
            </div>
            <div>
                {post.content}
            </div>
        </div>
        
        <div className='text-right flex-grow'>
            {showEditBtn && (

            <Link href={`/profile/edit-post/${post.id}`} className='text-green-400'>Edit</Link>
            )}
        </div>


    </div>
    
  )
}
