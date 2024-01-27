"use client"
import React from 'react'
import Image from 'next/image'
import { PageWrapper } from '../page-wrapper'
import { motion } from "framer-motion-3d"
import Example from '@/components/barloader'
import Link from 'next/link'



export default function contact() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <PageWrapper>
    <div>
   
<Example/>
 


 <div className='flex justify-between bg-gradient-to-r from-indigo-700 to-black'>
   <div className=''>
     
 <a href='https://www.linkedin.com/in/sambhav-das-630ba1278/'> <Image src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
   width="90"
   height="90"/>
   </a>
   <a href='https://www.linkedin.com/in/sambhav-das-630ba1278/'> <div className='flex bg-blue-950 rounded-md ring-2 hover:ring-black mt-2 mx-3 mb-4'>

   <div >
   <h1 className='text-white text-2xl mt-2 mx-10'>Sambhav Das</h1>
   <h2 className='text-white mx-10'>Let's connect on LinkedIn
   </h2>
   
   </div>

   </div></a></div>


 </div>
 
 <div className='flex justify-end'>
 <a href='https://twitter.com/imSambhavDas'> <Image src="https://im.rediff.com/news/2023/jul/24twitter.jpg?w=670&h=900"
   width="100"
   height="100"
   className='mt-3'/></a>
   

   </div>
 <div className='flex justify-end mx-4 mt-3'>
   <a href='https://twitter.com/imSambhavDas'> <div className=' bg-black rounded-md ring-2 hover:ring-4 mb-5'>
<div className='flex justify-end mx-20 mt-2'> <Image src="https://pbs.twimg.com/profile_images/1741095085331337216/KEDVVLm8_400x400.jpg"
width="90"
height="90"
className='rounded-full ring-black '

/></div>
   <div>
   <h1 className='text-white text-2xl mt-2 mx-10'>Sambhav Das</h1>
   <h2 className='text-white mx-10'>@imSambhavDas</h2>
   
   </div>

   </div></a></div>
   
<div className='mt-3 '>
<a href='https://github.com/perceptron10100sdas'> <Image src="https://github.blog/wp-content/uploads/2023/01/1200x640.png?fit=1200%2C640"
      width="100"
      height="100"
      className='mt-3 mx-4'/></a>
      

      </div>
    <div className='flex justify-start mx-4 mt-3'>
      <a href='https://github.com/perceptron10100sdas'> <div className=' bg-white rounded-md ring-2 hover:ring-4 mb-5 shadow-lg '>
   <div className='flex justify-end mx-20 mt-2 '> <Image src="https://pbs.twimg.com/profile_images/1678817133051138048/j6WFI0kj_400x400.jpg"
width="100"
height="100"
className='rounded-full ring-white '

/></div>
      <div>
      <h1 className='text-black text-2xl mt-2 mx-10'>Sambhav Das</h1>
      <h2 className='text-black mx-10'>@perceptron10100sdas</h2>
      
      </div>

      </div></a>




</div>


   
   
   
   
   
   
    </div>
    </PageWrapper>
 
       
    
  )
}
