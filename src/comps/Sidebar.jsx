import React from 'react'
import {FaRegObjectGroup , FaDesktop ,FaMugHot , FaUsers , FaHandsHelping} from 'react-icons/fa'
const Sidebar = () => {
  return (
      <div
          className='  z-50 bg-gradient-to-b from-[#39a4dc] to-[#2763ab] sm:pt-12 text-white fixed w-full sm:w-fit sm:gap-5 sm:top-0 left-0 sm:h-[100vh] flex sm:flex-col flex-row bottom-0'>
          <div className='flex flex-col p-1 py-3 items-center justify-center'>
              <FaRegObjectGroup  className='sm:text-xl'/>
              <p className='sm:font-bold text-sm text-center'>Dashboard</p>
          </div>
          <div className='flex flex-col p-1 py-3 items-center justify-center'>
              <FaDesktop  className='sm:text-xl'/>
              <p className='sm:font-bold text-sm text-center'>Workplace</p>
          </div>
          <div className='flex flex-col p-3 items-center justify-center'>
              <FaMugHot  className='sm:text-xl'/>
              <p className='sm:font-bold text-sm text-center'>Holidays</p>
          </div>
          <div className='flex flex-col p-1 py-3 items-center justify-center bg-[#2765ac] border-l-2 border-[#59c203]'>
              <FaUsers  className='sm:text-xl'/>
              <p className='sm:font-bold text-sm text-center'>Employees</p>
          </div>
          <div className='flex flex-col p-1 py-3 items-center justify-center'>
              <FaHandsHelping  className='sm:text-xl'/>
              <p className='sm:font-bold text-sm text-center'>inbound requests</p>
          </div>
    </div>
  )
}

export default Sidebar