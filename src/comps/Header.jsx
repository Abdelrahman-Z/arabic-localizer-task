import React from 'react'
import {FaBell} from 'react-icons/fa'
const Header = () => {
  return (
		<div className='p-5 flex flex-row flex-wrap justify-end gap-1 sm:gap-4 items-center'>
			<span className='text-[#474747] mr-7	'>Thursday, 03 Oct 02:08:07 PM</span>
			<button className='bg-[#27b40c] py-1 px-3 rounded-md text-white'>Sign In</button>
			<FaBell className='text-[#8997a4]' />
			<div className='flex flex-row gap-2 items-center justify-between sm:justify-center mx-auto sm:mx-0'>
				<img src='/public/143125885_2315678515242881_5714302319212467167_n.jpg' className='w-7 rounded-full' />
				<span className='text-[#8997a4]'>Ahmed Khaled</span>
			</div>
		</div>
  )
}

export default Header