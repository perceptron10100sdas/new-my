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
    <motion.div
    initial={{ opacity: 0}} animate={{ opacity: 1}}
    transition={{duration:6, ease:"easeInOut" }}
    className='bg-gradient-to-bl from-black via-black to-purple-700 min-h-[180px] mt-3'>
    <div className='flex justify-evenly gap-3'>
        <div className='bg-black   scale-50 shadow-md shadow-purple-600 ring-1 mt-3 hover:ring-white brightness-75  hover:-translate-y-5 hover:scale-110 hover:brightness-110 '> <Link href="/skills"  
         
          className='text-blue-500 mx-5 my-6 flex items-start text-2xl rounded-lg font-semibold hover:text-white hover:animate-bounce hover:overline'
        
          ><h1 className='hover:font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600  to-blue-600 brightness-75'>Skills</h1></Link></div>
          <div className='flex items-center'>
          <div className='bg-black shadow-md scale-50 shadow-orange-500 brightness-75 hover:shadow-xl  hover:shadow-orange-500 ring-1 mt-3 hover:ring-white transition ease-in-out hover:-translate-y-5 hover:scale-110 '><Link href="/project"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl rounded-lg font-semibold  hover:text-white hover:overline  '><h1 className=' hover:font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600 brightness-90  hover:brightness-200'>My Portfolio</h1></Link></div></div>
    <div className='bg-black transition ease-in-out -translate-y-5 scale-120 shadow-xl  brightness-120  hover:brightness-110 hover:-translate-y-5  shadow-yellow-500 hover:shadow-xl  hover:shadow-yellow-500 ring-1 mt-3 hover:ring-white '> <Link href="/contact"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl font-semibold  hover:text-white hover:animate-bounce hover:overline '><h1 className='hover:font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-blue-600 brightness-90  hover:brightness-200 '>Contact</h1></Link></div>
     </div></motion.div></PageWrapper>
 
       
    
  )
}
