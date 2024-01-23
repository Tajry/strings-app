import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function DeleteBtn({posts}:{posts:PostI}) {

    const router = useRouter();
    const [state , setState] = useState({showConfirm:false})


    const handleDeleteBtn  = async ()=>{
        const res = await fetch('/api/posts/'+posts.id,{
            method:'DELETE'
        })

        if (res.ok) {
            router.push('/profile')
        }
    }

    const handleClick = async () => {
        state.showConfirm = !state.showConfirm
        setState(state)
    }

  return (
    <div>
        {!state.showConfirm && (
            <button className='text-red-400' onClick={handleClick}>Delete Post</button>
        )}
        {state.showConfirm && (
            <div>
                <p>Are you sure you want to delete this post ?</p>
                <div>
                    <button className='text-red-400'>yes</button>
                    <button className="text-bule-400" onClick={handleClick}>no</button>
                </div>
            </div>
        )}
    </div>
  )
}
