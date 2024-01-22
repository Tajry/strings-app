
"use client"

import React from 'react'
import UserPageHeader from './user-page-header'
import useSWR from 'swr'

export default function UserPage({params}:{params:{username:string}}) {

  

  return (
    <div>
        <UserPageHeader username={params.username} />
        <div>post container {params.username}</div>
    </div>
  )
}
