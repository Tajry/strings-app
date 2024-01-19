import React, { useState } from 'react'
import PostList from './post-list';

function PostContainer({username}:{username:string}) {
    const [cnt ,setCnt] =useState(1);
    const page = [];
    for (let i = 0 ; i< cnt;i++) {
        page.push(
            <PostList index={i} username={username} key={i} />
        )
    }
  return (
    <div className='my-3'>
        {page}
        <div>
            <button className='bg-slate-900 p-2 rounded-lg self-center' onClick={()=>setCnt(cnt +1)}>Load more</button>
        </div>
    </div>
  )
}

export default PostContainer