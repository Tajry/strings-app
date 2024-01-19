import User from '@/app/components/User';
import React from 'react'
import useSWR from 'swr'

export default function FollowingList({index}:{index:number}) {

    const {data:userData} = useSWR("/api/users/profile");
    
    const {data:followingData } = useSWR(()=> '/api/users/'+userData.data.id+'/follower?page='+index)
    if (!followingData) return  <div>loading...</div>

  return (
    <ul>
        {followingData.data.map((user:UserI)=>{
            return(
                <li className='my-5' key={user.id}>
                    <User user={user} />
                </li>
            )
        })}
    </ul>
  )
}
