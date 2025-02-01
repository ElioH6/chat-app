import React from 'react'

const Msg = () => {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHSju9KA-8QEQ70U9PtxJYhMeCZAuiMAxjA&s" alt="" />
            </div>
        </div>
        <div className="chat-bubble chat-bubble-info text-white">Hello mf</div>
        <div className="chat-footer opacity-50 text-sm flex gap-1 items-center">12:00</div>
    </div>
  )
}

export default Msg