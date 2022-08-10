import React from 'react'
import requests from '../../utils/requests'
import { useRouter } from 'next/router'

const Nav = () => {

  const router = useRouter();
  return (
    <nav className='mt-9 relative'>
        <div  className='flex 
         overflow-y-hidden space-x-8 whitespace-nowrap px-10 text-xl sm:px-15 sm:space-x-20 scrollbar-hide '>
           {Object.entries(requests).map(([key , {title , url}]) => (

            <h2 key={key} onClick={(() => router.push(`?genre=${key}`))} className=' cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-400 hover:text-white'>{title}</h2>
           )) }

        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12 '/>


    </nav>
  )
}

export default Nav