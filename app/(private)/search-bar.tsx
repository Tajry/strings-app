import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function SearchBar() {
    const [searchResults  , setSearchResults] = useState([])

    async function fetchSearchResults(searchText:string) {
        
        const res = await fetch('/api/search?q='+searchText)
        if (res.ok) {
            const json = await res.json()
            // console.log(json.data)
            setSearchResults(json.data)
        }
    }

    const handleChange = async (event:ChangeEvent<HTMLInputElement>)=>{
        fetchSearchResults(event.target.value)
        
    }


  return (
    <div>
        <input type="text" onChange={handleChange} className='p-2 rounded-lg bg-gray-700 my-y' placeholder='Search' />      
    </div>
  )
}
