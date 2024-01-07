"use client"
import { PageWrapper } from '@/app/page-wrapper';
import { Button, Icon } from '@mui/material';
import Link from 'next/link'
import { useState } from 'react';
import { motion } from 'framer-motion';




export default function Footer() {
 

  return (
   
    <motion.div
    initial={{ opacity: 0}} animate={{ opacity: 1}}
    transition={{duration:6, ease:"easeInOut" }}
    className='bg-gradient-to-bl from-black via-black to-purple-700 min-h-[180px] mt-3'>
        
        <div className='flex justify-evenly gap-3'>

        <motion.div animate={{ scale: [0.5,1, 0.7, 0.5, 1]}}
  transition={{ type: "spring",repeat:Infinity, duration: 10 }}  className='bg-black transition ease-in-out hover:-translate-y-5 hover:scale-110 shadow-md shadow-purple-500 hover:shadow-xl  hover:shadow-purple-600 ring-1 mt-3 hover:ring-white hover:visible'> <Link href="/skills"  
         
          className='text-blue-500 mx-5 my-6 flex items-start text-2xl rounded-lg font-semibold hover:text-white hover:animate-bounce hover:overline'
        
          ><h1 className='hover:font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 brightness-90  hover:brightness-200'>Skills</h1></Link></motion.div>
          <div className='flex items-center'>
         <motion.div animate={{ scale: [ 0.5,0.7,1, 0.5,0.7, 1] }}
  transition={{ type: "spring",repeat:Infinity, duration: 5 }} className='bg-black shadow-md shadow-orange-500 hover:shadow-xl  hover:shadow-orange-500 ring-1 mt-3 hover:ring-white transition ease-in-out hover:-translate-y-5 hover:scale-110 '><Link href="/project"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl rounded-lg font-semibold  hover:text-white hover:overline  '><h1 className=' hover:font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600 brightness-90  hover:brightness-200'>My Portfolio</h1></Link></motion.div></div>
    <motion.div animate={{ scale:[1, 0.5,0.7, 1, 0.5,0.7]}}
  transition={{ type: "spring",repeat:Infinity, duration: 5 }} className='bg-black transition ease-in-out hover:-translate-y-5 hover:scale-110 shadow-md shadow-yellow-500 hover:shadow-xl  hover:shadow-yellow-500 ring-1 mt-3 hover:ring-white '> <Link href="/contact"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl font-semibold  hover:text-white hover:animate-bounce hover:overline '><h1 className='hover:font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-600 brightness-90  hover:brightness-200 '>Contact</h1></Link></motion.div>
     </div>
     


    
    </motion.div>
    
  )
}
