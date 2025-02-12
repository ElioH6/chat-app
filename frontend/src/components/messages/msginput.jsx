import React, { useContext, useState } from 'react'
import { BsSend } from "react-icons/bs";
import { AuthContext } from '../../context/AuthContext';

const Msginput = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, currentChat } = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    setLoading(true);
    try {
      const res = await fetch(`/message/send/${currentChat._id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({ message }),
      })

      if (!res.ok) {
        setLoading(false);
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setMessages([...messages, data]);
      setMessage('');
      
    } catch (error) {
      setLoading(false);
      console.log('error sending msg', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='px-4 my-3'>
          <div className='w-full relative'>
              <input data-theme="dark" className='border text-sm rounded-lg p-2.5 w-full border-info text-white' type="text" placeholder='Type your message...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
              <button className='absolute inset-y-0 end-0 flex items-center px-3'>
                {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-r-2 border-white"></div>
              ) : (
                <BsSend className="text-white hover:text-gray-400" />
              )}              
              </button>
          </div>
      </div>
    </form>
  )
}

export default Msginput