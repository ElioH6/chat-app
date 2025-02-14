import React, { useContext } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import MsgContainer from '../../components/messages/msgContainer';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const { currentChat } = useContext(AuthContext);
  const isMobile = window.innerWidth <= 640; // Check if mobile screen

  return (
    <div className='flex sm:h-[450px] md:h-[550px] p-6 rounded-lg shadow-md bg-gray-400/0 backdrop-filter backdrop-blur-lg border border-gray-100/10'>
      {/* Show sidebar only if no chat is selected or on larger screens */}
      {(!currentChat || !isMobile) && <Sidebar />}

      {/* Show message container if a chat is selected or on larger screens */}
      {(currentChat || !isMobile) && <MsgContainer />}
    </div>
  );
};

export default Home;