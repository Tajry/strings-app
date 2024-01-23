'use client'
import React from 'react'
import useSWR from 'swr'
import Form from './form'

export default function EditPost({params}:{params:{id:number}}) {
    // console.log(params.id)
    const {data , error , isLoading} = useSWR('/api/posts/'+params.id)
    if (error) return <div>faild to load</div>
    if (isLoading ) return <div>loading ....</div>
  return (
    <div>
        <h2>Edit Post</h2>
        <div className='flex flex-col gap-10'>
            <Form posts={data.data} />
            {/* <DeleteBtn /> */}
        </div>
    </div>
  )
}
