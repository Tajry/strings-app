import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center ">
     <div className="flex flex-col gap-2 p-5 max-w-xs bg-slate-800 w-full rounded-lg">
      <div className="text-center my-4 ">
        <h1>string</h1>
      </div>
      <div>
        <Link className="bg-slate-900 p-3  w-full my-4 rounded-lg block" 
        href={'/signin'} >Sign In</Link>
      </div>
      <div>
        <Link  className="bg-slate-900 p-3  w-full my-4 rounded-lg block" 
        href={'/signup'}>Sign Up</Link>
      </div>
      </div> 
    </main>
  )
}
