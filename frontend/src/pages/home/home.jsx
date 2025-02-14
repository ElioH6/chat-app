import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import MsgContainer from '../../components/messages/msgContainer';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
  const { currentChat } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex justify-center w-screen h-[100%] md:h-[550px] p-6 rounded-lg shadow-md bg-gray-400/0 backdrop-filter backdrop-blur-lg border border-gray-100/10'>
      {(!currentChat || !isMobile) && <Sidebar />}
      {(currentChat || !isMobile) && <MsgContainer />}
    </div>
  );
};

export default Home;
