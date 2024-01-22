import React from 'react'

export default function UserPage({params}:{params:{username:string}}) {
  return (
    <div>
        <header>header</header>
        <div>post container {params.username}</div>
    </div>
  )
}
