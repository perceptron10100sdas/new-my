import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Feed() {
  return (
    <div>
    <div className='text-5xl text-center  font-light'>
      <h1 className='text-white underline bg-gradient-to-r from-blue-950 via-black to-blue-950'>Available for projects...</h1>
      </div>
<div className='bg-inherit  md:flex md:justify-evenly'>
  <div className='mt-4'>
    <a href="https://react.dev/" > <Image src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
      width={400}
      height={400}
      className='w-400 h-400 ring-2 hover:ring-4 rounded-md'
      
      
      /></a> 
     
     <Link href="https://react.dev/" className='text-blue-500 text-3xl font-semibold hover:underline'>REACT</Link>
    
     </div>
     <div className='bg-inherit mt-4'>
      <a  href="https://nextjs.org/"><img src='https://nextjs.org/static/blog/next-13/twitter-card.png'
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md'
      /></a>
      <Link href="https://nextjs.org/" className='text-white text-3xl font-semibold hover:underline'>NextJs</Link>
      
     </div>
     
    </div>
    
    <div className='bg-inherit md:flex md:justify-evenly'>
      <div className='mt-4 sm:sticky'>
        <div className='flex justify-start'>
    <a href="https://tailwindcss.com/"> <Image src="https://simbyone.com/content/images/2023/04/Tailwind_covertailwind_cover.png"
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md'
     /></a>
     </div>
     
     <Link href="https://tailwindcss.com/" className='text-blue-500 text-3xl hover:overline'>Tailwind CSS</Link>
     
     </div>
     <div> 
     <h1 className='text-orange-500 text-3xl mt-3 font-sans'>Many more upcoming..</h1>
     </div>
    </div>
    
   
    </div>
    
  )
}
