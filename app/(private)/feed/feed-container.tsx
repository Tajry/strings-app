
import React, { useState } from 'react'
import FeedList from './feed-list';

export default function FeedContainer() {
    const [cnt ,setCnt] = useState(1)


    const page = [];
    for (let i = 0; i < cnt; i++) {
        page.push(<FeedList index={i} key={i} />)
    }



  return (
    <div>
        {page}
        <div className='flex justify-center'>
            <button className='bg-slate-900 p-2 rounded-lg' onClick={()=> setCnt(cnt +1)}> Load More</button>
        </div>
    </div>
  )
}
