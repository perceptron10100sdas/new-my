"use client"

import Image from 'next/image'
import Footer from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Project from '@/components/Project'
import { Alert } from '@mui/material'
import Link from 'next/link'
import SpotifyPlaylist from '@/components/SpotifyPlaylist'
import { useState,useEffect } from 'react'








export default function Home() {
  const [userName, setUserName] = useState(null)
  useEffect(() => {
    const uc = window.prompt("please enter your name")
    setUserName(uc)
  }, [])
  
  return (
    <main className="bg-gradient-to-r from-blue-950 to bg-black">
      <div className='flex'>
    


      
      <h1 className='text-white text-4xl font-sans font-thin mx-5'>Welcome {userName} !</h1>
      </div>
            <div className="flex flex-col items-center mt-24">
       <div class="bg-[url('/demo.png')] ring-2 rounded-md hover:ring-4 mx-3 mb-3" className='ring-2 rounded-md hover:ring-4 mx-3 mb-3' >       
      
     <Link href="/contact"><Image src='https://pbs.twimg.com/profile_images/1678817133051138048/j6WFI0kj_400x400.jpg'
       width="300"
       height="100" className='ring-4 hover:ring-black rounded-full mx-10 mt-3'/></Link> 
       <h2 className='text-white text-clip text-2xl mt-5 font-thin mx-24'>I am</h2>
       <div className='mt-6 items-center'>
       
<h1 className='text-white text-4xl font-bold mx-20 '>Sambhav Das</h1>

        
        <div className='mt-3'>
        <h2 className='text-white text-2xl  md:font-sans sm:font-serif mx-4 '>NextJs Web Developer</h2></div>
        <Link href="https://perceptron10100sdas.hashnode.dev/" className='text-white  text-2xl  md:font-sans sm:font-serif  mx-4 '>perceptron10100sdas@hashnode</Link>
       </div>
      <div className='mb-3'>
       <div className='mt-7'><Link href="https://d3mxt5v3yxgcsr.cloudfront.net/certificates/TP-HFZ51N69.jpg" className='text-white font-semibold mb-5 mx-20'>Certifications</Link></div>
       </div>
       </div>
      
     </div>
    </main>
  )
  }
  
