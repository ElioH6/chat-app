import React from 'react'
import Search from './search'
import Conversations from './conversations'
import Logout from './logout'

const Sidebar = () => {
  return (
    <div className='h-full w-screen md:w-1/3 border-r border-slate-500 p-4 flex flex-col'> 
        <Search />
        <div className='divider px-3'></div>
        <Conversations />
        <Logout />
    </div>
  )
}

export default Sidebar