"use client"
import Link from 'next/link'


export default function Footer() {

  return (
    <div className=' bg-black '>
        <div className='flex justify-evenly '>
          <Link href="/skills"  
         
          className='bg-blue-500 mx-5 my-6 flex items-start text-2xl rounded-lg font-semibold hover:text-white '
          
       
          
          ><h1>Technologies and Skills</h1></Link>
          <div className='flex items-center'>
      <Link href="/project"  className='bg-blue-500 mx-4 my-6 flex items-start text-2xl rounded-lg font-semibold  hover:text-white '><h1>My Portfolio</h1></Link></div>
     <Link href="/contact"  className='bg-blue-500 mx-4 my-6 flex items-start text-2xl rounded-lg font-semibold  hover:text-white'><h1>Contact</h1></Link>
     </div>
     <h2 className='text-2xl text-center text-blue-500 mt3' >Click to navigate to different sections</h2>
<Link href="/" className='text-white flex justify-center mt-7'>Return to Home page</Link>
<h3 className='text-slate-500 overline mt-6 '>copyrights@perceptron10100sdas</h3>
    </div>
  )
}
