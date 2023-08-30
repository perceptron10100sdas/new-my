"use client"
import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div > 
    <div className='bg-gradient-to-r from-green-500 to-red-500'>
    <h1 className='text-3xl flex justify-center'>Let's connect...</h1>
    </div>
   
    <div className='flex justify-end bg-gradient-r from-slate-800 to-blue-950'>
      <Image src="https://im.rediff.com/news/2023/jul/24twitter.jpg?w=670&h=900"
      width="100"
      height="100"/>
      <Link href="https://twitter.com/imSambhavDas" className=' text-yellow-200 underline decoration-slate-100'>Twitter</Link>
    </div>
    <div className='flex bg-gradient-to-r from-blue-600 to-blue-950'>
      <Image src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
      width="90"
      height="90"/>
      <Link href="https://www.linkedin.com/in/sambhav-das-630ba1278/" className='text-white'>LinkedIn </Link>
    </div>
   
    </div>
  )
}
