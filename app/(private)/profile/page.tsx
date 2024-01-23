"use client"
import React from 'react'
import useSWR from 'swr'
import Form from './form'
import PostContainer from '@/app/components/post-container'
export default function Profile() {


  const  {data ,error ,isLoading } = useSWR("/api/users/profile")

  if (error) return <div>failed to load</div>
  if (isLoading || !data) return <div>load....</div>


  // console.log(data)


  return (
    <main>
      <h2>profile</h2>
      <Form />
      <PostContainer username={data.data.username} showEditBtn={true} />
    </main>
  )
}
