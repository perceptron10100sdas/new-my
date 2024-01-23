"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageWrapper } from '../page-wrapper'
import { motion } from 'framer-motion'
export default function skills() {
  return (
    <PageWrapper>
    <div>
      <div className='text-5xl text-center  font-light'>
      <h1 className='text-white underline bg-gradient-to-r from-blue-950 via-black to-blue-950 hover:animate-ping'>Available for projects...</h1>
      </div>
<div className='bg-gradient-to-tr from-black via-black to bg-purple-950  md:flex md:justify-evenly'>
  
  <motion.div animate={{scale:[0,1]}} transition={{duration:3, ease:"easeInOut" }}    className='mt-5 mx-3'>
    <div className='flex justify-center '>
    <a href="https://react.dev/" > <Image src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
      width={400}
      height={400}
      className='w-400 h-400 ring-2 hover:ring-4 rounded-md shadow-lg shadow-purple-500 hover:shadow-xl  hover:shadow-purple-500 '

      
      
      /></a> </div>
     
     <Link href="https://react.dev/" className='text-blue-500 text-2xl font-semibold hover:underline mt-3 mx-2  '>REACT</Link>
    
     </motion.div>
     <motion.div initial={{y:-50}} animate={{y:0}} transition={{duration:3, ease:"easeInOut" }} className='mt-3 mx-2 mb-3'>
     <a  href="https://nodejs.org/en"> <div className='flex justify-center mx-2 mt-2'><img src='https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png'
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-blue-300 hover:shadow-xl  hover:shadow-blue-300 mt-4 '
      /></div></a>

      <h2 className='text-2xl font-bold text-white'>NodeJS</h2>
     </motion.div>
     <motion.div animate={{scale:[0,1]}} transition={{duration:4, ease:"easeInOut" }} className=' mt-4 mx-2'>
      <a  href="https://nextjs.org/"> <div className='flex justify-center mx-2 mt-2'><img src='https://nextjs.org/static/blog/next-13/twitter-card.png'
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-blue-300 hover:shadow-xl  hover:shadow-blue-300 '
      /></div></a>
      <Link href="https://nextjs.org/" className='text-white text-2xl font-semibold hover:underline mt-3 mx-2'>NextJs</Link>
      
     </motion.div>
     
    </div>
    
    <div className='bg-inherit md:flex md:justify-evenly'>
      <motion.div initial={{y:-50}} animate={{y:0}} transition={{duration:5, ease:"easeInOut" }} className='mt-4 sm:sticky'>
        <div className='flex mx-2 '>
    <a href="https://tailwindcss.com/"> <div className='flex justify-center mt-2 mx-2'><Image src="https://simbyone.com/content/images/2023/04/Tailwind_covertailwind_cover.png"
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-sky-500 hover:shadow-xl  hover:shadow-sky-500'
     /></div></a>
     </div>
     
     <Link href="https://tailwindcss.com/" className='text-white text-2xl hover:overline mt-3 mx-2'>Tailwind CSS</Link>
     
     </motion.div>
    <motion.div animate={{scale:[0,1]}} transition={{duration:4, ease:"easeInOut" }} className='mt-3 mx-2 mb-3'>
    <a href="https://www.mongodb.com/"> <div className='flex justify-center mt-2 mx-2'><Image src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-green-500 hover:shadow-xl  hover:shadow-green-500'
     /></div></a>
<h2 className='text-2xl text-green-500 mt-3 font-bold '>Mongo Db</h2>
    </motion.div>
    <motion.div initial={{y:-50}} animate={{y:0}} transition={{duration:6, ease:"easeInOut" }} className='mt-3 mx-2 mb-3'>
    <a href="https://expressjs.com/"> <div className='flex justify-center mt-2 mx-2'><Image src="https://miro.medium.com/v2/resize:fit:805/1*t40l2rOzSEXZbvGWClW-Pw.png"
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-green-500 hover:shadow-xl  hover:shadow-green-500'
     /></div></a>
     <h2 className='text-white text-2xl mx-4 font-bold mt-3'>ExpressJs</h2>
    </motion.div>
     <div> 
     <h1 className='text-orange-500 text-2xl mt-3 font-sans overline animate-pulse'>Many more upcoming..</h1>
     </div>
    </div>
    </div>
    <motion.div
    initial={{ opacity: 0}} animate={{ opacity: 1}}
    transition={{duration:6, ease:"easeInOut" }}
    className='bg-gradient-to-bl from-black via-black to-purple-700 min-h-[180px] mt-3'>
    <div className='flex justify-evenly gap-3'>
        <div className='bg-black  -translate-y-5 scale-120 shadow-xl shadow-purple-600 ring-1 mt-3 hover:ring-white brightness-125 animate-bounce'> <Link href="/skills"  
         
          className='text-blue-500 mx-5 my-6 flex items-start text-2xl rounded-lg font-semibold hover:text-white hover:animate-bounce hover:overline'
        
          ><h1 className='hover:font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 brightness-200'>Skills</h1></Link></div>
          <div className='flex items-center'>
          <div className='bg-black shadow-md scale-50 shadow-orange-500 brightness-75 hover:shadow-xl  hover:shadow-orange-500 ring-1 mt-3 hover:ring-white transition ease-in-out hover:-translate-y-5 hover:scale-110 '><Link href="/project"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl rounded-lg font-semibold  hover:text-white hover:overline  '><h1 className=' hover:font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600 brightness-90  hover:brightness-200'>My Portfolio</h1></Link></div></div>
    <div className='bg-black transition ease-in-out scale-50 brightness-75 hover:-translate-y-5 hover:scale-110 shadow-md shadow-yellow-500 hover:shadow-xl  hover:shadow-yellow-500 ring-1 mt-3 hover:ring-white '> <Link href="/contact"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl font-semibold  hover:text-white hover:animate-bounce hover:overline '><h1 className='hover:font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-600 brightness-90  hover:brightness-200 '>Contact</h1></Link></div>
     </div></motion.div></PageWrapper>
  )
}
