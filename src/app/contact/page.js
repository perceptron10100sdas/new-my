import React from 'react'
import Image from 'next/image'

export default function contact() {
  return (
    <div>
       <div className='bg-gradient-to-r from-green-500 via-black to-red-500'>
    <h1 className='text-3xl text-white flex justify-center'>Let's connect...</h1>
    </div>
   
    <div className='flex justify-between bg-gradient-to-r from-indigo-700 to-black'>
    <a href='https://www.linkedin.com/in/sambhav-das-630ba1278/'> <Image src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
      width="90"
      height="90"/>
      </a>
    <a href='https://twitter.com/imSambhavDas'> <Image src="https://im.rediff.com/news/2023/jul/24twitter.jpg?w=670&h=900"
      width="100"
      height="100"
      className='mt-3'/></a> 
   
    </div>
    </div>
  )
}
