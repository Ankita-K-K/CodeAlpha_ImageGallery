import React, { useState } from 'react'

const SearchBar = ({setText}) => {
    const [searchText, setSearchText] = useState('');
    function onSubmit(e){
        e.preventDefault();
        setText(searchText);
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input value={searchText} onChange={(e) => {setSearchText(e.target.value)}} placeholder='search image you want' className='border-b border-zinc-400 outline-none pb-1'/>
            <button className='px-4 py-1 rounded-md bg-[#82b478] text-white' type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar
