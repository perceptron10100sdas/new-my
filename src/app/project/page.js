"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '../page-wrapper'
import { motion } from 'framer-motion'
import Example, { Ex, Google, Imdb, Starbucks } from '@/components/cutout'
import { SiMongodb ,SiExpress, SiReact, SiNodedotjs, SiNextdotjs, SiFirebase, SiCss3, SiGithub, SiTailwindcss} from "react-icons/si";
import Projects from '@/components/Projects'





export default function project() {
  


  return (
    <PageWrapper>
    <div>{/* 
       <div  className='bg-gradient-to-r from-orange-500 to-yellow-400 '>
      <h1 className=' text-3xl flex justify-end  '>#Projects made by me...</h1>
      </div>
      <div>
      <div className=' bg-black gap-7'>
      <motion.div initial={{ y: -100,scale:.9}} animate={{ y: 0}}
  transition={{duration:1.8, ease:"anticipate" }} whileHover={{
    scale: 1,
    transition: { duration: 1.2 },
  }}
  whileTap={{ scale: 1.2 }} whileInView={{ scale: 1 }}  className='mt-6  ring-white ring-4 hover:ring-8 rounded-md     mx-2  hover:z-50  hover:mb-36 scale-75 hover:scale-100  -mb-20'>
        
          <Link href="https://blushhavenhomes.onrender.com"  className='text-2xl bg-black  rounded-lg mr-1'>
       
         
         <Example/>
        
         </Link>
<div className=' bg-clip-content p-5  space-y-2 rounded-md shadow-black shadow-xl '>
         
         <div className='flex justify-center gap-4 -z-10 '>
         <div className='bg-white rounded-md  p-3'>
          <SiMongodb className='text-black text-4xl '/></div>
          <div className='bg-white rounded-md  p-3'>
          <SiExpress className='text-black text-4xl '/></div>
          <div className='bg-white rounded-md  p-3'>
          <SiReact className='text-black text-4xl'/></div>
          <div className='bg-white rounded-md  p-3'>
          <SiNodedotjs className='text-black text-4xl'/></div>
          <div className='bg-white rounded-md   p-3'>
          <SiFirebase className='text-black text-4xl'/></div>
         </div>
         </div>
         
         
        </motion.div>
        <motion.div initial={{ y: 100,scale:.9,opacity:0}} animate={{ y: 0}}
  transition={{duration:3, ease:"linear" }} whileHover={{
    scale: 1,
    transition: { duration: 1.2 },
  }}
  whileTap={{ scale: 1.2 }} 
  whileInView={{opacity:1}} className=' ring-4  ring-lime-300  rounded-2xl shadow-xl shadow-black  hover:shadow-xl   mx-2 -mt-32 z-30 '>
          
         <div className=''> <Link href="https://blip-perceptron10100.vercel.app/"  className='text-2xl bg-black  rounded-2xl mr-1 '><Ex/></Link></div>
         <div className=' bg-clip-content p-5  space-y-2 rounded-md shadow-black shadow-xl '>
         <div className='flex justify-center gap-4  '>
         <div className='bg-slate-800 rounded-md shadow-black shadow-xl p-3'>
          <SiNextdotjs className='text-lime-300 text-4xl'/></div>
          <div className='bg-slate-800 rounded-md shadow-black shadow-xl p-3'>
          <SiFirebase className='text-lime-400 text-4xl '/></div>
          <div className='bg-slate-800 rounded-md shadow-black shadow-xl p-3'>
          <SiReact className='text-lime-300 text-4xl'/></div>
          <div className='bg-slate-800 rounded-md shadow-lime-300 shadow-xl p-3'>
          <SiNodedotjs className='text-lime-300 text-4xl'/></div>
         </div>
         </div>
         
        </motion.div>
        <motion.div initial={{ x: 100}} animate={{ x: 0}}
  transition={{duration:3.5, ease:"linear" }}  className='mt-6 mx-2 ring-red-500 ring-2 hover:ring-4 rounded-md shadow-lg shadow-black hover:shadow-xl  '>

      <Link href="https://google-clone-lyart-gamma.vercel.app/" >
      <Google/>
      </Link>
      
      <div className='flex justify-end'><a href="https://github.com/perceptron10100sdas/google-clone" className='font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-black py-1 px-1 rounded-lg mr-1'><img src='https://w7.pngwing.com/pngs/240/158/png-transparent-social-media-computer-icons-github-fork-github-purple-text-social-media.png' width={50} height={50}/></a></div>
      <div className='flex justify-center gap-4 p-5 shadow-black shadow-xl'>
      <div className='bg-yellow-500 rounded-md shadow-black shadow-xl p-3'>
          <SiNextdotjs className='text-white text-4xl'/></div>
         <div className='bg-orange-500 rounded-md shadow-red-500 shadow-xl p-3'>
          <SiTailwindcss className='text-white text-4xl'/></div>
          <div className='bg-green-500 rounded-md shadow-green-500 shadow-xl p-3'>
         
          <SiReact className='text-white text-4xl'/></div>
          <div className='bg-blue-400 rounded-md shadow-blue-500 shadow-xl p-3'>
          <SiNodedotjs className='text-white text-4xl'/></div>
         </div>
     
      
      </motion.div>
     <motion.div initial={{ x: -100}} animate={{ x: 0}}
  transition={{duration:3.5, ease:"linear" }} className='mt-6 mx-2 ring-yellow-500  ring-2 hover:ring-4 rounded-md  shadow-lg shadow-yellow-500 hover:shadow-xl  hover:shadow-yellow-500'>
     <div className='flex justify-center'><a href="https://imdb-perceptron10100.vercel.app/" > </a></div>
      
        
        <Link href="https://imdb-perceptron10100.vercel.app/"  className="font-bold bg-amber-500"><Imdb/></Link>
        <div className='flex justify-end'><Link href="https://github.com/perceptron10100sdas/imdb" className='bg-orange-500 rounded-md shadow-black shadow-xl p-3 mt-2'><SiGithub className='text-black text-4xl' /></Link>
        </div>
        <div className='flex justify-center gap-4 p-5 '>
        <div className='bg-orange-500 rounded-md shadow-black shadow-xl p-3'>
          <SiNextdotjs className='text-black text-4xl'/></div>
         <div className='bg-orange-500 rounded-md shadow-black shadow-xl p-3'>
          <SiTailwindcss className='text-black text-4xl'/></div>
          <div className='bg-orange-500 rounded-md shadow-black shadow-xl p-3'>
         
          <SiReact className='text-black text-4xl'/></div>
          <div className='bg-orange-500 rounded-md shadow-black shadow-xl p-3'>
          <SiNodedotjs className='text-black text-4xl'/></div>
         </div>
        </motion.div>  
    <motion.div initial={{ x: 100}} animate={{ x: 0}}
  transition={{duration:4.5, ease:"linear" }} className='mt-6 mx-2 ring-green-300 ring-2 hover:ring-4 rounded-md  shadow-lg shadow-green-500 hover:shadow-xl  hover:shadow-green-500'>  
    <div className='flex justify-center'>
<a href='https://astounding-kringle-914635.netlify.app/'></a></div>
<Link href='https://astounding-kringle-914635.netlify.app/'  className="font-bold bg-amber-500"><Starbucks/></Link>
<div className='flex justify-end'><Link href="https://github.com/perceptron10100sdas/starbucks" className='bg-white rounded-md shadow-white  shadow-xl p-3 mt-3'><SiGithub className='text-black text-4xl'/></Link></div>
<div className='flex justify-center gap-4 p-5 '>
         <div className='bg-white rounded-md shadow-white shadow-xl p-3'>
          <SiCss3 className='text-black text-4xl'/></div>
          <div className='bg-white rounded-md shadow-white  shadow-xl p-3'>
         
          <SiReact className='text-black text-4xl'/></div>
          <div className='bg-white rounded-md shadow-white  shadow-xl p-3'>
          <SiNodedotjs className='text-black text-4xl'/></div>
         </div>
         
</motion.div>  

<h1 className='text-2xl font-sans text-white mt-3'>More projects coming up including instagram,auth etc...</h1>
      </div>
      
      </div>*/}
     <Projects/>
    </div> 
  </PageWrapper>
  )
}
