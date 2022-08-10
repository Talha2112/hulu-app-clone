import React, { forwardRef } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'


const Thumbnail = forwardRef(({result} , {ref}) => {

  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div ref={ref} className='group p-2 mt-3 transition duration-300 ease-in transform sm:hover:scale-105 sm:hover:z-50'>
        <Image className='cursor-pointer'
        layout='responsive'
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
      `${BASE_URL}${result.poster_path}`
      }
      height={1080}
      width = {1920}
        
     
        
        />
     <div className='mt-2 '>
      <p className='truncate max-w-sm'>{result.overview}</p>
      <h2 className='text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
      <p className='flex items-center opacity-0 group-hover:opacity-100'>{result.media_type && `${result.media_type}  `}{" "}
<ThumbUpIcon className='h-4 w-7' />{result.vote_count}      
      </p>
      
      </div>   
    </div>
  )
})

export default Thumbnail