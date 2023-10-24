import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function skills() {
  return (
    <div>
      <div className='text-5xl text-center  font-light'>
      <h1 className='text-white underline bg-gradient-to-r from-blue-950 via-black to-blue-950 hover:animate-ping'>Available for projects...</h1>
      </div>
<div className='bg-inherit  md:flex md:justify-evenly'>
  <div className='mt-5 mx-3'>
    <div className='flex justify-center '>
    <a href="https://react.dev/" > <Image src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
      width={400}
      height={400}
      className='w-400 h-400 ring-2 hover:ring-4 rounded-md shadow-lg shadow-purple-500 hover:shadow-xl  hover:shadow-purple-500 '

      
      
      /></a> </div>
     
     <Link href="https://react.dev/" className='text-blue-500 text-2xl font-semibold hover:underline mt-3 mx-2  '>REACT</Link>
    
     </div>
     <div className='mt-3 mx-2 mb-3'>
     <a  href="https://nodejs.org/en"> <div className='flex justify-center mx-2 mt-2'><img src='https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png'
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-blue-300 hover:shadow-xl  hover:shadow-blue-300 mt-4 '
      /></div></a>

      <h2 className='text-2xl font-bold text-white'>NodeJS</h2>
     </div>
     <div className='bg-inherit mt-4 mx-2'>
      <a  href="https://nextjs.org/"> <div className='flex justify-center mx-2 mt-2'><img src='https://nextjs.org/static/blog/next-13/twitter-card.png'
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-blue-300 hover:shadow-xl  hover:shadow-blue-300 '
      /></div></a>
      <Link href="https://nextjs.org/" className='text-white text-2xl font-semibold hover:underline mt-3 mx-2'>NextJs</Link>
      
     </div>
     
    </div>
    
    <div className='bg-inherit md:flex md:justify-evenly'>
      <div className='mt-4 sm:sticky'>
        <div className='flex mx-2 '>
    <a href="https://tailwindcss.com/"> <div className='flex justify-center mt-2 mx-2'><Image src="https://simbyone.com/content/images/2023/04/Tailwind_covertailwind_cover.png"
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-sky-500 hover:shadow-xl  hover:shadow-sky-500'
     /></div></a>
     </div>
     
     <Link href="https://tailwindcss.com/" className='text-white text-2xl hover:overline mt-3 mx-2'>Tailwind CSS</Link>
     
     </div>
    <div className='mt-3 mx-2 mb-3'>
    <a href="https://www.mongodb.com/"> <div className='flex justify-center mt-2 mx-2'><Image src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-green-500 hover:shadow-xl  hover:shadow-green-500'
     /></div></a>
<h2 className='text-2xl text-green-500 mt-3 font-bold '>Mongo Db</h2>
    </div>
    <div className='mt-3 mx-2 mb-3'>
    <a href="https://expressjs.com/"> <div className='flex justify-center mt-2 mx-2'><Image src="https://miro.medium.com/v2/resize:fit:805/1*t40l2rOzSEXZbvGWClW-Pw.png"
      width={400}
      height={400}
      className='ring-2 hover:ring-4 rounded-md shadow-lg shadow-green-500 hover:shadow-xl  hover:shadow-green-500'
     /></div></a>
     <h2 className='text-white text-2xl mx-4 font-bold mt-3'>ExpressJs</h2>
    </div>
     <div> 
     <h1 className='text-orange-500 text-2xl mt-3 font-sans overline animate-pulse'>Many more upcoming..</h1>
     </div>
    </div>
    </div>
  )
}
