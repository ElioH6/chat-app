import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useSocket } from '../../context/socketContext';

const Convo = ({ data, lastIdx }) => {
  const { currentChat, setCurrentChat } = useContext(AuthContext);
  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(data._id);
  const selected = currentChat?._id === data._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-info rounded p-2 py-1 cursor-pointer ${
          selected ? 'bg-info' : ''
        }`}
        onClick={() => setCurrentChat(data)}
      >
        <div className={`avatar ${isOnline ? 'avatar-online' : 'avatar-offline'}`}>
          <div className='w-12 rounded-full'>
            <img src={data.profilePic} alt='' />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold'>{data.username}</p>
            <span className='text-xl'>{currentChat?._id === data._id && '✓'}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  );
};

export default Convo;