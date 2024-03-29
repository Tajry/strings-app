import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

export default function AvatarForm() {

    const {data , error ,isLoading} = useSWR('/api/users/profile')
    if (error) return <div>failed to load</div>
    if (isLoading || !data) return <div>loading...</div>
    const user = data.data

  return (
    <form >
        {user.avatar && (
            <div>
                <Image 
                    src={user.avatar}
                    alt={user.avatar}
                    width={200}
                    height={200}
                    className='rounded-full m-auto my-5'
                />
            </div>
        )}
        {!user.avatar && (
            <div className='bg-slate-600 rounded-full m-auto my-5' style={{width:200 ,height:200}}>
                
            </div>
        )}
        <Link href={'/avatar/upload'}>Update avatar</Link>
    </form>
  )
}
