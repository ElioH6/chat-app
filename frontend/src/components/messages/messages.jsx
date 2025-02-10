import { useContext, useEffect, useRef, useState } from 'react';
import Msg from './msg';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../loading/loading';
import { TiMessages } from 'react-icons/ti';

const Messages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, currentChat } = useContext(AuthContext);
  const lastMsgRef = useRef(null);

  useEffect(() => {
    lastMsgRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/message/${currentChat._id}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (res.status === 404) {
          setMessages([]);
          setLoading(false);
          return;
        }

        if (!res.ok) {
          setLoading(false);
          throw new Error(res.statusText);
        }

        const data = await res.json();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('error fetching messages', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [currentChat, setMessages]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {messages.length === 0 ? (
        <NoMsg />
      ) : (
        messages.map((msg) => (
          <div ref={lastMsgRef} key={msg._id} >
            <Msg msg={msg} />
          </div>
        ))
      )}
    </div>
  );
};

export default Messages;

const NoMsg = () => {
  return (
    <div className='flex items-center justify-center w-full h-full text-gray-200'>
      <div className='px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2'>
        <p>This chat is empty 😴</p>
        <p>Start a conversation by sending a message</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};