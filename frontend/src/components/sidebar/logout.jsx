import React, { useContext } from 'react'
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

  const handleLogout = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'GET',
        credentials: 'include'
      })

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      setAuth(null);
      navigate('/login');
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div onClick={handleLogout} className='mt-auto'>
        <BiLogOut className='w-6 h-6 text-white cursor-pointer mt-6' />
    </div>
  )
}

export default Logout