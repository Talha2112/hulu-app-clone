import React from 'react'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Headeritems from './Headeritems.js'
import { HomeIcon,BadgeCheckIcon,CollectionIcon,LightningBoltIcon,SearchIcon,UserIcon
 } from '@heroicons/react/outline'


const Header = () => {
  return (
  <header className='flex flex-col sm:flex-row sm:px-3 justify-between items-center h-auto m-5'>
    <div className='flex flex-grow justify-evenly max-w-2xl mt-2 '>
        <Headeritems Icon={HomeIcon} title='HOME'/>
        <Headeritems Icon={LightningBoltIcon} title='TRENDING'/>
        <Headeritems Icon={BadgeCheckIcon} title='VERIFIED'/>
        <Headeritems Icon={CollectionIcon} title='COLLECTIONS'/>
        <Headeritems Icon={SearchIcon} title='SEARCH'/>
        <Headeritems Icon={UserIcon} title='ACCOUNT'/>

    </div>
  
         <Image className=' object-contain mt-5' src="/123.png"
           width={100}
         height={50}

          />


  </header>
  )
}

export default Header

