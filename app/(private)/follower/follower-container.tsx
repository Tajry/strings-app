
"use client"
import React, { useState } from 'react'
import FollowerList from './follower-list';

export default function FollowerContainer() {

    const [cnt , setCnt] = useState(1)
    const page = [];
    for(let i =0; i< cnt ;i++) {
        page.push(<FollowerList index={i} key={i} />)
    }

  return (
    <div>
        {page}
        <div className='flex justify-center w-full'>
            <button onClick={()=> setCnt(cnt +1)} className='bg-slate-900 p-2 rounded-lg'>Load more</button>
        </div>

    </div>
  )
}
