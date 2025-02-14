import React, { useContext, useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Search = () => {
  const [search, setSearch] = useState('');
  const { currentChat, setCurrentChat } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

  const findUsers = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/users/allUsers`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();
      setUsers(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }
    if (search.length < 2) {
      return toast.error('Search must be at least 2 characters long');
    }

    const conversation = users.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setCurrentChat(conversation);
      setSearch('');
    } else {
      toast.error('User not found');
    }

  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input data-theme="dark" className='input input-info input-bordered rounded-full' type="text" placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button className='btn btn-info btn-circle'>
            <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default Search