import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Filtersection from '../components/Layout/Filtersection'

const Screen = () => {
  return (
    <div className='bg-[#ffffff] flex flex-col gap-8'>
      <div className='flex flex-col gap-2 jutify-center items-center'>
        <Navbar/>
        <Filtersection/>
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Screen
