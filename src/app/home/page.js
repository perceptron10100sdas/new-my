import { ExpandCircleDown, KeyboardArrowDown, SwipeDown, SwipeDownAltOutlined } from '@mui/icons-material'
import React from 'react'

export default function page() {
  return (
    <div className='h-screen bg-gray-300 rounded-3xl'>
      <div  className='text-black flex justify-between  p-4  '>
        <div  className=' '>
        <h1 className=' font-extralight uppercase text-[12px] sm:text-xl'>Sambhav Das</h1> <h1 className=' italic text-[8px] sm:text-sm'>Full Stack Web developer</h1></div>
        <div >
        <h1 className='font-extralight uppercase text-[12px] sm:text-xl'>Portfolio</h1>
        <h1 className=' italic text-[8px] sm:text-sm mx-6'>2024</h1></div>
        <div>
        <h1 className='font-extralight uppercase text-[12px] sm:text-xl text-end'>say hello</h1> <h1 className=' italic text-[8px] sm:text-sm flex justify-center'>sambhavdas.2020@gmail.com</h1></div>
        
      </div><div className='grid justify-center mt-44 '><h1 className='flex  text-black text-3xl sm:text-7xl font-extralight lowercase space-x-2 '>Welcome to <p className=' italic overline'>my</p> Portfolio</h1>
      <h1 className='uppercase text-[13px] sm:text-sm font-sans  mt-6 text-center'>Hope you enjoy it </h1></div>
   <div className='absolute bottom-6 left-3 flex text-[8px] '>
    <KeyboardArrowDown className='text-black sm:text-3xl mt-2 animate-bounce  ring-1  ring-black rounded-full '/>
    <h1 className='uppercase sm:text-xl mt-1 mx-2 font-extralight'>Scroll to explore </h1></div>
    </div>
  )
}
