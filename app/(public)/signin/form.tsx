"use client" 

import { useRouter } from 'next/navigation' 
import React , {FormEvent ,useState} from 'react'

export default function From() {
    const router = useRouter();
    const [username ,setUsername ] = useState<undefined | string>("")
    const [password ,setPassword ] = useState<undefined | string>("")

    const handdleSubmit =  async (e:FormEvent)=>{
        e.preventDefault()
        const res = await fetch("/api/login", {
            method:'post',

            body:JSON.stringify({username:username ,password: password})
        })
        if (res.ok) {
            router.push("/feed");
        }else {
            alert("login failed");
        }
    }


  return (
    
    <form onSubmit={handdleSubmit} 
    className='flex flex-col gap-2 max-w-xs w-full bg-slate-900 rounded-lg p-5'
    >
        <div className='head text-center'>
            <h3 className='font-semibold'>Sign In</h3>
        </div>
        <div className=''>
            <hr />
        </div>
        <div className='flex flex-col gap-2 '>
            <div className=''>
                <label htmlFor="">Username</label>
                <input type="text" 
                    className='text-black p-3 border border-slate-700 rounded w-full'
                    onChange={event => setUsername(event.target.value)} 
                    value={username}
                    id='username'
                    placeholder='Username'
                    required
                />
            </div>
        </div>
        <div className='flex flex-col gap-2 '>
            <div >
                <label htmlFor="">password</label>
                <input type="password" 
                    className='text-black p-3 border border-slate-700 w-full rounded'
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    placeholder='Password'
                    required
                />
                
            </div>
        </div>
        <button type="submit" className='mt-5 bg-red-500 text-white p-3 rounded-lg' >Sign In</button>
    </form>
  )
}
