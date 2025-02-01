import React from 'react'

const Convo = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-info rounded p-2 py-1 cursor-pointer'>
        <div className='avatar avatar-online'>
            <div className='w-12 rounded-full'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHSju9KA-8QEQ70U9PtxJYhMeCZAuiMAxjA&s" alt=""></img>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold'>John Doe</p>

                    <span className='text-xl'>😘</span>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Convo