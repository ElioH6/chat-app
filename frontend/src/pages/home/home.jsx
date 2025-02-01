import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import MsgContainer from '../../components/messages/msgContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] p-6 rounded-lg shadow-md bg-gray-400/0 backdrop-filter backdrop-blur-lg border border-gray-100/10'>
        <Sidebar />
        <MsgContainer />
    </div>
  )
}

export default Home