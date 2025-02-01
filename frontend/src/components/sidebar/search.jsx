import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <form className='flex items-center gap-2'>
        <input data-theme="dark" className='input input-info input-bordered rounded-full' type="text" placeholder='Search'></input>
        <button className='btn btn-info btn-circle'>
            <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default Search