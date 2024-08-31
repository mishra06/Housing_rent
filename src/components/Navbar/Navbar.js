import React from 'react'
import Wishlist from '../Layout/Wishlist'
import Layout from '../Layout/Layout'
import { HiMiniHome } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
  return (
    <div className='flex justify-evenly items-center h-[15vh] w-full'>
      <div>
        <HiMiniHome onClick={() => navigate("/")} size={30} className='cursor-pointer text-green-800' />
      </div>
      <div >
        <h1 className='text-4xl font-medium capitalize text-red-800'>Search properties to rent</h1>
      </div>
      <div className=' flex justify-center-items-center gap-2'>
        <div className='flex gap-1'>
            <input className='border-2 border-solid border-gray p-1 placeholder-gray-500 rounded px-2 bg-[#f1f7ff] ' placeholder="Search" type="text" />
            <button className='border-2 border-solid border-black px-4 py-1 rounded-[8px] outline-none hover:text-white hover:bg-black'>Search</button>
        </div>
        <div>
            <button onClick={()=>navigate("/fab")} className='border-2 border-solid border-black px-4 py-1 rounded-[8px] outline-none hover:text-white hover:bg-black'>Likes</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
