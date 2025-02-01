import React from 'react'
import Messages from './messages'
import Msginput from './msginput'
import { TiMessages } from "react-icons/ti";

const MsgContainer = () => {
  const noChat = false;

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChat ? (<NoChat /> ) : (
          <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
              <span className='label text-gray-300'>To:</span>
              <span className='textgray-900 font-bold mx-2'>John Doe</span>
          </div>

          <Messages />
          <Msginput />
      </>
      )}
    </div>
  )
}

export default MsgContainer

const NoChat = () => {
  return (
    <div className='flex items-center justify-center w-full h-full text-gray-200'>
      <div className='px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2'>
        <p>Welcome John Doe🥳</p>
        <p>Start a conversation by selecting a chat</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}