"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '../page-wrapper'
import { motion } from 'framer-motion'

export default function project() {
  return (
    <PageWrapper>
    <div>
       <div  className='bg-gradient-to-r from-orange-500 to-yellow-400 '>
      <h1 className=' text-3xl flex justify-end  '>#Projects made by me...</h1>
      </div>
      <div>
      <div className=' bg-gradient-to-tr from-black via-black to bg-purple-950 gap-7'>
      <motion.div initial={{ y: -100}} animate={{ y: 0}}
  transition={{duration:1.5, ease:"linear" }} className='mt-6  ring-pink-500 ring-2 hover:ring-4 rounded-md shadow-lg shadow-pink-500 hover:shadow-pink-500 hover:shadow-xl   mx-2'>
          <div className='flex justify-center '>
          <a href='https://blushhavenhomes.onrender.com'><Image src="/estate.png"
          width={500}
          height={400}
          className='ring-2 hover:ring-white rounded-md mt-4 hover:transition ease-out hover:-translate-y-6'
          /></a></div>
         <div className='mt-3 '> <Link href="https://blushhavenhomes.onrender.com"  className='text-2xl bg-black py-1 px-1 rounded-lg mr-1'><div className='flex '><img src='/air.svg'  width={50} height={50}/><h1 className='bg-white mt-2 text-2xl font-thin text-pink-500 hover:underline rounded-md p-2' >blushhavenhomes</h1></div></Link></div>
         <p className='text-white font-normal'>BlushHavenHomes is your go-to platform for seamlessly connecting sellers with buyers made using MERN</p>
        </motion.div>
        <motion.div initial={{ x: -100}} animate={{ x: 0}}
  transition={{duration:3, ease:"linear" }} className='mt-6 ring-white  ring-2 hover:ring-4 rounded-md shadow-lg shadow-white hover:shadow-xl  hover:shadow-white mx-2'>
          <div className='flex justify-center '>
          <a href='https://blip-perceptron10100.vercel.app/'><Image src="/blip.png"
          width={500}
          height={400}
          className='ring-2 hover:ring-white rounded-md mt-4 hover:transition ease-out hover:-translate-y-6'
          /></a></div>
         <div className='mt-3 '> <Link href="https://blip-perceptron10100.vercel.app/"  className='text-2xl bg-black py-1 px-1 rounded-lg mr-1'><div className='flex'><img src='https://thumbs.dreamstime.com/b/delhi-india-july-twitter-new-logo-white-background-vector-285096216.jpg' width={50} height={50}/><h1 className='text-white mt-2 text-2xl font-semibold hover:underline' >BLIP</h1></div></Link></div>
         <p className='text-white font-normal'>X clone made using nextjs and firebase</p>
        </motion.div>
        <motion.div initial={{ x: 100}} animate={{ x: 0}}
  transition={{duration:3.5, ease:"linear" }}  className='mt-6 mx-2 ring-red-500 ring-2 hover:ring-4 rounded-md shadow-lg shadow-orange-500 hover:shadow-xl  hover:shadow-orange-500'>
<div className='flex justify-center'>
      <a href="https://google-clone-lyart-gamma.vercel.app/"><Image src="/googleclone.jpeg"
      width={500}
      height={500}
     
      className='ring-2 hover:ring-red-500 rounded-md mt-4 hover:transition ease-out hover:-translate-y-6 '
      />
      </a></div>
      <div className='flex justify-end'><a href="https://github.com/perceptron10100sdas/google-clone" className='font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-black py-1 px-1 rounded-lg mr-1'><img src='https://w7.pngwing.com/pngs/240/158/png-transparent-social-media-computer-icons-github-fork-github-purple-text-social-media.png' width={50} height={50}/></a></div>
      <Link href="https://google-clone-lyart-gamma.vercel.app/" className='text-2xl bg-red-500 py-1 px-1 rounded-lg mr-1 hover:bg-blue-950 hover:underline'><div className='flex'><img src='https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw' width={100} height={30}/><h1 className='text-white mt-2 text-2xl font-thin' >Clone</h1></div></Link>
      <p className='text-white'>A Google clone developed by me using nextjs13 and tailwind css and powered by google search API</p>
      </motion.div>
     <motion.div initial={{ x: -100}} animate={{ x: 0}}
  transition={{duration:3.5, ease:"linear" }} className='mt-6 mx-2 ring-yellow-500  ring-2 hover:ring-4 rounded-md  shadow-lg shadow-yellow-500 hover:shadow-xl  hover:shadow-yellow-500'>
     <div className='flex justify-center'><a href="https://imdb-perceptron10100.vercel.app/" > <Image src="/imdbclone.png"
        width={500}
        height={500}
       
      
        className='ring-2 hover:ring-black rounded-none mt-4 hover:transition ease-out hover:-translate-y-6'/></a></div>
      
        <div className='flex justify-end'><Link href="https://github.com/perceptron10100sdas/imdb" className='font-bold text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500py-1 px-1 rounded-lg mr-1'><img src='https://w7.pngwing.com/pngs/240/158/png-transparent-social-media-computer-icons-github-fork-github-purple-text-social-media.png' width={50} height={50}/></Link>
        </div>
        <Link href="https://imdb-perceptron10100.vercel.app/"  className="font-bold bg-amber-500 py-1 px-1 rounded-lg mr-1"><div className='flex'><img src='https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg' width={100} height={30}/><h1 className='text-white mt-2 text-3xl font-thin' >Clone</h1></div></Link>
        <p className='text-white'>Imdb clone made using nextjs 13 and tailwind css and data fetched by tmdb</p>
        </motion.div>  
    <motion.div initial={{ x: 100}} animate={{ x: 0}}
  transition={{duration:4.5, ease:"linear" }} className='mt-6 mx-2 ring-green-300 ring-2 hover:ring-4 rounded-md hover:bg-blue-950 shadow-lg shadow-green-500 hover:shadow-xl  hover:shadow-green-500'>  
    <div className='flex justify-center'>
<a href='https://astounding-kringle-914635.netlify.app/'><Image src="/starbucksclone.png"

width={500}
height={500}
className='ring-2 hover:ring-green-950 rounded-none flex mt-4 hover:transition ease-out hover:-translate-y-6 '/></a></div>

<div className='flex justify-end'><Link href="https://github.com/perceptron10100sdas/starbucks" className='font-bold text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-black py-1 px-1 rounded-lg mr-1'><img src='https://w7.pngwing.com/pngs/240/158/png-transparent-social-media-computer-icons-github-fork-github-purple-text-social-media.png' width={50} height={50}/></Link></div>
<Link href="https://astounding-kringle-914635.netlify.app/" className='text-2xl text-white bg-white py-1 px-1 rounded-md font-semibold'><div className='flex'><img src='data:image/png;base64,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' width={150} height={30}/><h1 className='text-white mt-2 text-2xl font-thin' >Clone</h1></div></Link>
<p className='text-white'>Starbucks clone made using React and inline css</p>
</motion.div>  

<h1 className='text-2xl font-sans text-white mt-3'>More projects coming up including instagram,auth etc...</h1>
      </div>
      
      </div>
    </div></PageWrapper>
  )
}
