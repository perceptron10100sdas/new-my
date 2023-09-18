"use client"
import Link from 'next/link'


export default function Footer() {

  return (
    <div className=' bg-black '>
        <div className='flex justify-evenly '>
        <div className='bg-inherit hover:bg-blue-950 ring-1 mt-3 hover:ring-white '> <Link href="/skills"  
         
          className='text-blue-500 mx-5 my-6 flex items-start text-2xl rounded-lg font-semibold hover:text-white hover:animate-bounce'
          
       
          
          ><h1>Skills</h1></Link></div>
          <div className='flex items-center'>
          <div className='bg-inherit hover:bg-blue-950 ring-1 mt-3 hover:ring-white '><Link href="/project"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl rounded-lg font-semibold  hover:text-white hover:animate-bounce '><h1>My Portfolio</h1></Link></div></div>
    <div className='bg-inherit hover:bg-blue-950 ring-1 mt-3 hover:ring-white '> <Link href="/contact"  className='text-blue-500 mx-4 my-6 flex items-start text-2xl font-semibold  hover:text-white hover:animate-bounce'><h1>Contact</h1></Link></div>
     </div>
     <h2 className='text-2xl text-center text-blue-950 mt3' >Click to navigate to different sections</h2>
<Link href="/" className='text-white flex justify-center mt-7'>Return to Home page</Link>
<h3 className='text-slate-500 overline mt-6 '>copyrights@perceptron10100sdas</h3>
    </div>
  )
}
