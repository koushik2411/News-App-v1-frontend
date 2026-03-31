import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({onSearch}) => {
    const [input, setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (!input.trim()) return;
        onSearch(input);

        setInput("");
    };

  return (
    <form 
    onSubmit={handleSearch}
    className=' my-2 flex justify-center gap-2'>
        <input 
            type='text' 
            placeholder='Search news...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=' w-[60vw] py-1 px-2 border outline-none rounded-lg'
        />

        <button 
        type='submit'
        disabled={!input.trim()} 
        className=' py-2 px-4 bg-linear-to-b from-gray-500 to-gray-700 dark:bg-linear-to-b dark:from-blue-500 dark:to-blue-700 text-gray-100 rounded-lg flex gap-2 items-center'>
            <FaMagnifyingGlass className=' hidden md:flex'/>
            Search
        </button>
    </form>
  )
}

export default SearchBar