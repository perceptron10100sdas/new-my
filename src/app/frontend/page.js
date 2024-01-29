"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Example from '@/components/menu'
import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import {motion} from "framer-motion"
export default function page() {
   
  return (
    <div>
         <Example/>
         <div className='grid gap-7'>
         <div className='flex justify-center gap-x-10'>  <SiReact className='text-8xl text-sky-500'/><motion.h1 className='text-8xl text-white font-thin'  initial={{ x:-100}} animate={{ x: 0}}
  transition={{duration:3, ease:"anticipate" }}>React</motion.h1></div>
      <div className='flex gap-x-10 justify-center'>  <SiNextdotjs className='text-8xl text-white'/><motion.h1 className='text-8xl text-white font-thin'  initial={{ x:-100}} animate={{ x: 0}}
  transition={{duration:3.5, ease:"anticipate" }}>Nextjs</motion.h1></div> 
       <div className='flex gap-x-10 justify-center'>
         <SiTailwindcss className='text-8xl text-sky-500'/><motion.h1 className='text-8xl text-white font-thin'  initial={{ x:-100}} animate={{ x: 0}}
  transition={{duration:4, ease:"anticipate" }}>Tailwind</motion.h1></div>
  <div className='flex gap-x-10 justify-center'>
   <SiFramer className='text-8xl text-white'/><motion.h1 className='text-8xl text-white font-thin'  initial={{ x:-100}} animate={{ x: 0}}
  transition={{duration:4.5, ease:"anticipate" }}>Framer</motion.h1>
     </div> 
     
    
    </div></div>
  )
}
