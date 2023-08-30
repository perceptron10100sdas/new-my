import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Feed() {
  return (
    <div>
    <div className='text-5xl text-center  font-light'>
      <h1 className='text-lime-400 underline bg-gradient-to-r from-green-400 via-black to-green-500'>Available for projects...</h1>
      </div>
<div className='bg-gradient-to-r from-pink-500 to-black flex justify-around'>
  <div>
      <Image src="https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png"
      width="400"
      height="600"
      className='ring-2 hover:ring-4 rounded-md'
      
      />
     
     <Link href="https://react.dev/" className='text-blue-500 text-3xl font-semibold hover:underline'>REACT</Link>
     <p >
     React is a free and open-source front-end JavaScript library for building user interfaces based on components.It is maintained by Meta and a community of individual developers and companies.
     </p>
     </div>
     <div className='bg-inherit'>
      <img src='https://d2mk45aasx86xg.cloudfront.net/Top_Features_in_Next_js_13_7f9a32190f.webp'
      width="500"
      height="600"
      className='ring-2 hover:ring-4 rounded-md'
      />
      <Link href="https://nextjs.org/" className='text-white text-3xl font-semibold hover:underline'>NextJs</Link>
      <p className='text-lime-500'>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
     </div>
     
    </div>
    
    <div className='bg-gradient-to-r from-pink-500 to-black flex justify-between'>
      <div>
        <div className='flex justify-start'>
     <Image src="https://adminlte.io/wp-content/uploads/2022/02/tailwindcss-templates.png"
      width="500"
      height="600"
      className='ring-2 hover:ring-4 rounded-md'
     />
     </div>
     
     <Link href="https://tailwindcss.com/" className='text-blue-500 bg-black text-3xl hover:overline'>Tailwind CSS</Link>
     <p className='text-black'>A utility-first CSS framework packed with classes</p>
     </div>
     <div> 
     <h1 className='text-orange-500 text-3xl'>Many more upcoming..</h1>
     </div>
    </div>
    
   
    </div>
    
  )
}
