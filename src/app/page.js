

import Image from 'next/image'
import Footer from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Project from '@/components/Project'
import { Alert } from '@mui/material'
import Link from 'next/link'
import SpotifyPlaylist from '@/components/SpotifyPlaylist'







export default function Home() {
  return (
    <main className="bg-gradient-to-r from-blue-950 to bg-black">
      <div className='flex'>
      <SpotifyPlaylist/>
      <h1 className='text-white text-2xl animate-bounce'>Hi,I am</h1>
      </div>
            <div className="flex flex-col items-center mt-24">
              
      
     <Link href="/contact"><Image src='https://pbs.twimg.com/profile_images/1678817133051138048/j6WFI0kj_400x400.jpg'
       width="300"
       height="100" className='ring-4 hover:ring-black rounded-full'/></Link> 
       <div className='mt-6 items-center'>
       
<h1 className='text-white text-4xl font-bold '>Sambhav Das</h1>

        
        <div className='mt-3'>
        <h2 className='text-white text-2xl  md:font-sans sm:font-serif  '>NextJs Web Developer</h2></div>
        <Link href="https://perceptron10100sdas.hashnode.dev/" className='text-white  text-2xl  md:font-sans sm:font-serif  '>perceptron10100sdas@hashnode</Link>
       </div>
      
       <div className='mt-7'><Link href="https://d3mxt5v3yxgcsr.cloudfront.net/certificates/TP-HFZ51N69.jpg" className='text-white font-semibold mb-4'>Certifications</Link></div>


      
     </div>
    </main>
  )
  }
  
