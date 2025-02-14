import React, { useContext } from 'react';
import Messages from './messages';
import Msginput from './msginput';
import { TiMessages } from 'react-icons/ti';
import { AuthContext } from '../../context/AuthContext';

const MsgContainer = () => {
  const { currentChat, setCurrentChat } = useContext(AuthContext);
  const isMobile = window.innerWidth <= 640; // Check if mobile screen

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!currentChat ? (
        <NoChat />
      ) : (
        <>
          {/* Back button for mobile */}
          {isMobile && (
            <button
              onClick={() => setCurrentChat(null)}
              className='p-2 bg-slate-500 text-white mb-2'
            >
              Back to Conversations
            </button>
          )}

          {/* Chat header */}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label text-gray-300'>To:</span>
            <span className='text-gray-900 font-bold mx-2'>{currentChat.username}</span>
          </div>

          {/* Messages and input */}
          <Messages />
          <Msginput />
        </>
      )}
    </div>
  );
};

const NoChat = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className='flex items-center justify-center w-full h-full text-gray-200'>
      <div className='px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2'>
        <p>Welcome {auth.username}🥳</p>
        <p>Start a conversation by selecting a chat</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  );
};

export default MsgContainer;