import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Msg = ({msg}) => {
  const { auth, currentChat } = useContext(AuthContext);
  const fromSelf = msg.senderId === auth.id;
  const handleClass = fromSelf ? 'chat chat-end' : 'chat chat-start';
  const profilePic = fromSelf ? auth.profilePic : currentChat?.profilePic
  const msgColor = fromSelf ? 'chat-bubble-info' : 'bg-gray-800';
  const formattedTime = extractedTime(msg.createdAt);

  return (
    <div className={`${handleClass}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="" />
            </div>
        </div>
        <div className={`chat-bubble ${msgColor} text-white break-words whitespace-pre-wrap max-w-90`}>{msg.message}</div>
        <div className="chat-footer opacity-50 text-sm flex gap-1 items-center text-white">{formattedTime}</div>
    </div>
  )
}

export default Msg

const extractedTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
};