"use client" 
// form sign up
import { useRouter } from 'next/navigation' 
import React , {FormEvent ,useState} from 'react'

export default function From() {
    const router = useRouter();
    const [username ,setUsername ] = useState<undefined | string>("")
    const [password ,setPassword ] = useState<undefined | string>("")
    const [confirmpassword ,setConfirmpassword ] = useState<undefined | string>("")
    const [error ,setError ] = useState<string[]>([]);

    const handdleSubmit =  async (e:FormEvent)=>{
        e.preventDefault()
        setError([])

        if (password != confirmpassword) {
            const newError  = []
            newError.push("password do not math.")
            setError(newError)
            return;
        }



        const res = await fetch("/api/signup", {
            method:'POST',

            body:JSON.stringify({username:username ,password: password})
        })
        if (res.ok) {
            window.location.href = "/signin"
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

        <div className='flex flex-col gap-2 '>
            <div >
                <label htmlFor="">Confirm password</label>
                <input type="password" 
                    className='text-black p-3 border border-slate-700 w-full rounded'
                    onChange={event => setConfirmpassword(event.target.value)}
                    value={confirmpassword}
                    placeholder='Confirm Password'
                    required
                />
                
            </div>
        </div>
        <button type="submit" className='mt-5 bg-red-500 text-white p-3 rounded-lg' >Sign UP</button>
        <div>
            {error.map((error)=>{
                return (
                    <div key={error} className='text-red-500'>
                        {error}
                    </div>
                )
            })}
        </div>
    </form>
  )
}
