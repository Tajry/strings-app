'use client';
import React from 'react'
import useSWR from 'swr'


const fetcher = async (url:RequestInfo | URL) =>{
  const res = await fetch(url);
  if (!res.ok) {
    const msg = "an error cucurred shlt fetching ";
    const info =  await res.json();
    const status = res.status;
    const error = new Error(msg);
    console.error(info ,status);
    throw error;
  }
}


export const Header = () => {
  const {data ,error ,isLoading} = useSWR("/api/users/profile",fetcher);

  if (error) return <div>failed to load </div>
  if (isLoading) return <div>loading....</div>

  console.log(data)


  return (
   <header>
    Header
   </header>
  )
}
