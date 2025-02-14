import React, { useContext } from 'react';
import Messages from './messages';
import Msginput from './msginput';
import { TiMessages } from 'react-icons/ti';
import { AuthContext } from '../../context/AuthContext';

const MsgContainer = () => {
  const { currentChat, setCurrentChat } = useContext(AuthContext);
  const isMobile = window.innerWidth <= 767;

  return (
    <div className="md:min-w-[450px] w-screen flex flex-col h-full">
      {!currentChat ? (
        <NoChat />
      ) : (
        <>
          {isMobile && (
            <button
              onClick={() => setCurrentChat(null)}
              className="p-2 btn btn-error mb-2 text-white self-start"
            >
              Back to Conversations
            </button>
          )}

          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label text-gray-300">To:</span>
            <span className="text-gray-900 font-bold mx-2">{currentChat.username}</span>
          </div>

          <div className="flex-1 overflow-y-auto">
            <Messages />
            <Msginput />
          </div>
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