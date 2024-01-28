"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { useState } from 'react'
import { SiExpress, SiFirebase, SiMongodb, SiNodedotjs } from 'react-icons/si'

export default function Backend() {
  return (
    <div>
    <div className='grid gap-7'>
    <div className='flex justify-center gap-x-10'>  <SiNodedotjs className='text-8xl text-green-500'/><motion.h1 className='text-8xl text-white font-light'  initial={{ x:-100}} animate={{ x: 0}}
transition={{duration:3, ease:"anticipate" }}>NodeJS</motion.h1></div>
  
  

  <div className='flex justify-center gap-x-10'>  <SiExpress className='text-8xl text-slate-500'/><motion.h1 className='text-8xl text-white font-light'  initial={{ x:-100}} animate={{ x: 0}}
transition={{duration:3.5, ease:"anticipate" }}>ExpressJs</motion.h1></div>

<div className='flex justify-center gap-x-10'>  <SiFirebase className='text-8xl text-orange-500'/><motion.h1 className='text-8xl text-white font-light'  initial={{ x:-100}} animate={{ x: 0}}
transition={{duration:4, ease:"anticipate" }}>Firebase<p className='text-white text-xl'>Database and Auth</p></motion.h1></div>
<div className='flex justify-center gap-x-10'>  <SiMongodb className='text-8xl text-green-500'/><motion.h1 className='text-8xl text-white font-light'  initial={{ x:-100}} animate={{ x: 0}}
transition={{duration:4.3, ease:"anticipate" }}>MongoDB<p className='text-white text-xl'>Database</p></motion.h1></div>

</div></div>
  )
}
