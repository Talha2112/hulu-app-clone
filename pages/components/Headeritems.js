import React from 'react'

const Headeritems = ({Icon , title}) => {
  return (
    <div className=' sm:mr-8 group w-10 sm:w-15
    flex flex-col items-center cursor-pointer hover:text-white' >
        <Icon className='h-8  group-hover:animate-bounce mt-2'/>
        <p className=' opacity-0 group-hover:opacity-100 tracking-widest mt-2'>
            {title}
        </p>

    </div>
  )
}

export default Headeritems