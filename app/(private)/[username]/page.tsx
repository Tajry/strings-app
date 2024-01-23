
"use client"

import React from 'react'
import UserPageHeader from './user-page-header'
import useSWR from 'swr'
import PostList from '@/app/components/post-list'
import PostContainer from '@/app/components/post-container'

export default function UserPage({params}:{params:{username:string}}) {

  

  return (
    <div>
        <UserPageHeader username={params.username} />
        <PostContainer username={params.username} showEditBtn={false} />
    </div>
  )
}
