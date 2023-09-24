"use client"
import Link from 'next/link'
import { useState } from 'react';


export default function Footer() {
 

  return (
    <div className=' bg-black '>
         
        <div className='flex justify-evenly '>
        <div className='bg-black transition ease-in-out hover:-translate-y-5 hover:scale-110 shadow-md shadow-purple-500 hover:shadow-xl  hover:shadow-purple-600 ring-1 mt-3 hover:ring-white'> <Link href="/skills"  
         
          className='text-blue-500 mx-5 my-6 flex items-start text-2xl rounded-lg font-semibold hover:text-white hover:animate-bounce hover:overline'
          
       
          
          ><h1 className='hover:font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 brightness-90  hover:brightness-200'>Skills</h1></Link></div>
          <div className='flex items-center'>
          <div className='bg-black shadow-md shadow-orange-500 hover:shadow-xl  hover:shadow-orange-500 ring-1 mt-3 hover:ring-white transition ease-in-out hover:-translate-y-5 hover:scale-110 '><Link href="/project"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl rounded-lg font-semibold  hover:text-white hover:overline '><h1 className=' hover:font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600 brightness-90  hover:brightness-200'>My Portfolio</h1></Link></div></div>
    <div className='bg-black transition ease-in-out hover:-translate-y-5 hover:scale-110 shadow-md shadow-yellow-500 hover:shadow-xl  hover:shadow-yellow-500 ring-1 mt-3 hover:ring-white '> <Link href="/contact"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl font-semibold  hover:text-white hover:animate-bounce hover:overline'><h1 className='hover:font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-600 brightness-90  hover:brightness-200'>Contact</h1></Link></div>
     </div>
     <h2 className='text-2xl text-center text-blue-950 mt3' >Click to navigate to different sections</h2>
<Link href="/" className='text-white flex justify-center mt-7'>Return to Home page</Link>
<h3 className='text-slate-500 overline mt-6 '>copyrights@perceptron10100sdas</h3>
    </div>
  )
}
