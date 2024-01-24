import Link from 'next/link'
import React from 'react'
import { usePathname,  } from 'next/navigation'


export default function Navbar() {

  const pathname = usePathname();


  return (
    <nav className='flex max-w-md w-full p-5 bg-slate-800   rounded-lg my-2'>
      <ul className='flex flex-row justify-around w-full'>
        <li>
          <Link 
          className={pathname.startsWith("/feed") ? "text-green-400" : "hover:text-slate-200"}
          href={'/feed'}>feed</Link>
        </li>
        <li>
          <Link 
            className={pathname.startsWith("/profile") ? "text-green-400" : "hover:text-slate-200"}
          href={'/profile'}>profile</Link>
        </li>
        <li>
          <Link
           className={pathname.startsWith("/following") ? "text-green-400" : "hover:text-slate-200"}
          href={'/following'}>following</Link>
        </li>
        <li>
          <Link
           className={pathname.startsWith("/follower") ? "text-green-400" : "hover:text-slate-200"}
          href={'/follower'}>follower</Link>
        </li>
      </ul>
    </nav>
  )
}
