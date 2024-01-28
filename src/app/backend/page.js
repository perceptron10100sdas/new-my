
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PageWrapper } from '../page-wrapper'
import { motion } from 'framer-motion'

import { useState } from 'react'
import { SiExpress, SiFirebase, SiMongodb, SiNodedotjs } from 'react-icons/si'

export default function page() {
    const TOGGLE_CLASSES="text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";
 
        const [selected, setSelected] = useState("Backend");
        
       
      
  return (
    <div>
      <div
            className={`grid h-[200px] place-content-center px-8 transition-colors ${
              selected === "Frontend" ? "bg-black" : "bg-black"
            }`}
          >
            <SliderToggle selected={selected} setSelected={setSelected} />
          </div>
      
          <div className='grid gap-7'>
         <div className='flex justify-center gap-x-10'>  <SiNodedotjs className='text-8xl text-green-500'/><motion.h1 className='text-8xl text-white font-light'  initial={{ x:-100}} animate={{ x: 0}}
  transition={{duration:3, ease:"anticipate" }}>NodeJS</motion.h1></div>
       
       
  
       <div className='flex justify-center gap-x-10'>  <SiExpress className='text-8xl text-slate-500'/><motion.h1 className=' text-8xl text-white font-light'  initial={{ x:-100}} animate={{ x: 0}}
  transition={{duration:3.5, ease:"anticipate" }}>ExpressJs</motion.h1></div>

<div className='flex justify-center gap-x-10'>  <SiFirebase className='text-8xl text-orange-500'/><motion.h1 className='text-8xl text-white font-light'  initial={{ x:-100}} animate={{ x: 0}}
  transition={{duration:4, ease:"anticipate" }}>Firebase<p className='text-white text-xl'>Database and Auth</p></motion.h1></div>
    <div className='flex justify-center gap-x-10'>  <SiMongodb className='sm:text-6xl md:text-8xl text-green-500'/><motion.h1 className='text-8xl text-white font-light'  initial={{ x:-100}} animate={{ x: 0}}
  transition={{duration:4.3, ease:"anticipate" }}>MongoDB<p className='text-white text-xl'>Database</p></motion.h1></div>
    
    </div></div>
   
  )
}
const SliderToggle = ({ selected, setSelected }) => {
    return (
    <div>
      <motion.p className='font-thin text-4xl text-white mb-3  italic text-center overline' initial={{ y:-100}} animate={{ y: 0}}
  transition={{duration:3, ease:"linear" }}> {
        selected === "Frontend" ? "I make websites look cooler just like this one": "I manage routes"
      }</motion.p>  

  
    <div className="relative flex w-fit items-center rounded-md">
      <Link href="/frontend"><button
        className={`text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 ${
          selected === "Frontend" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSelected("Frontend")
          ;
        }}
      >
        <span className="relative z-10 text-4xl font-thin">Frontend</span>
      </button></Link>
      <Link href="/backend"><button
        className={`text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 ${
          selected === "Backend" ? "text-white" : "text-purple-800"
        }`}
        onClick={() => {
          setSelected("Backend");

        }}
      >
       
       
        <span className="relative z-10 text-4xl font-thin">Backend</span>
      </button></Link>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "Backend" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
      
    </div> </div>

)};
