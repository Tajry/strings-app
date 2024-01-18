import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex max-w-md w-full p-5 bg-slate-800 rounded-lg my-2'>
      <ul className='flex flex-row justify-around w-full'>
        <li>
          <Link href={'/feed'}>feed</Link>
        </li>
        <li>
          <Link href={'/profile'}>profile</Link>
        </li>
        <li>
          <Link href={'/following'}>following</Link>
        </li>
        <li>
          <Link href={'/follower'}>follower</Link>
        </li>
      </ul>
    </nav>
  )
}
