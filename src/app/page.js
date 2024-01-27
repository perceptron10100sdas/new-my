"use client"
import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

import { useState,useEffect } from 'react'
import dynamic from 'next/dynamic'
import {motion} from "framer-motion"
import { PageWrapper } from './page-wrapper'
import Footer from '@/components/Footer'
import { HoverImageLinks } from '@/components/HoverLInks'
import Sidebar from '@/components/Sidebar'

















export default function Home() {
 
  const [userName, setUserName] = useState(null)
  
 

  useEffect((e) => {
  const uc = (window.prompt("please enter your name"))
    setUserName(uc)
    
  }, [])
   
 
  
  return (
    <PageWrapper>
       
          
       
     
    <main className="bg-gradient-to-tr from-black via-black to bg-purple-950">
      
      <div className='flex'>
    


  <motion.h1 initial={{ opacity: 0}} animate={{ opacity: .95}}
  transition={{duration:3, ease:"easeInOut" }} className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-sky-500 to-white text-5xl font-sans font-thin mx-4'>Welcome {userName} !</motion.h1>
  
      </div>
      
            <motion.div initial={{ scale:2}} animate={{ scale: 1}}
  transition={{duration:6, ease:"easeInOut" }}   className="flex flex-col items-center mt-24">
              <div className=''>
       <div class="bg-[url('/demo.png')] max-w-screen   ring-1 rounded-md shadow-2xl shadow-sky-500 transition ease-out hover:translate-y-4  hover:scale-110 mb-3 "  >       
       
     <div className='mt-3'><Image src='/iconimg.webp'
       width="300"
       height="100" className='ring-4 hover:ring-black rounded-full mx-10 mt-5 '/></div>
       <h2 className='text-white text-clip text-2xl mt-5 font-thin mx-24'>I am</h2>
       
       <div className='mt-6 items-center'>
       
<h1 className='text-transparent text-4xl font-bold mx-20 bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600  underline decoration-slate-200 shadow-xl shadow-indigo-500 transition ease-in-out delay-150 hover:-translate-y-1 brightness-150'>Sambhav Das</h1>

        
        <div className='mt-3'>
          
        <h2 className='text-white text-2xl  md:font-sans sm:font-serif mx-4  '>NextJs,MERN full-stack</h2>
        <h2 className='text-white text-2xl  md:font-sans sm:font-serif mx-4 text-center'>Web developer</h2></div>
        <Link href="https://perceptron10100sdas.hashnode.dev/" className='text-white  text-xl  md:font-sans sm:font-serif mx-3 text-center'>perceptron10100sdas@hashnode</Link>
       </div>

      
      
      <div className='mb-3'>
       <div className='mt-7'><Link href="https://d3mxt5v3yxgcsr.cloudfront.net/certificates/TP-HFZ51N69.jpg" className='text-white font-semibold mb-5 mx-20'>Certifications</Link></div>
       </div>
       </div>
       
       </div>
      
     </motion.div> 
     
     
     
    </main> </PageWrapper>
      )
  }
  
