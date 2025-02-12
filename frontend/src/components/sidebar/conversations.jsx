import React, { useEffect, useState } from 'react'
import Convo from './convo'
import Loading from '../loading/loading';

const Conversations = () => {
  const [Conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const res = await fetch('/users/allUsers', {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) {
          setLoading(false);
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setConversations(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchConversations();
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='py-2 flex flex-col overflow-auto text-white'>
      {Conversations.map((convo, index) => (<Convo key={convo._id} data={convo} lastIdx={index === Conversations.length - 1} />))}
    </div>
  )
}

export default Conversations