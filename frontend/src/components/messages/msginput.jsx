import React from 'react'
import { BsSend } from "react-icons/bs";

const Msginput = () => {
  return (
    <div className='px-4 my-3'>
        <div className='w-full relative'>
            <input data-theme="dark" className='border text-sm rounded-lg p-2.5 w-full border-info text-white' type="text" placeholder='Type your message...'></input>
            <button className='absolute inset-y-0 end-0 flex items-center px-3'>
                <BsSend className='text-white' />
            </button>
        </div>
    </div>
  )
}

export default Msginput