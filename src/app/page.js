

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
      
      <Alert><SpotifyPlaylist/>click the play button for music.As Autoplay isn't supported by browsers</Alert>
      <div className='flex justify-end' >
     
      <h1 className="font-bold text-white text-2xl">Hey this is Sambhav Das</h1>
      <div className='flex justify-between'>
     <Image src="https://pbs.twimg.com/profile_images/1678817133051138048/j6WFI0kj_400x400.jpg"
     className='ring-2 hover:ring-4 rounded-full'
     height="200"
     width="200"/>
     </div>
     
     </div>
     <div className='flex justify-between'>
     <Link href="https://d3mxt5v3yxgcsr.cloudfront.net/certificates/TP-HFZ51N69.jpg" className='text-white font-semibold'>NEXTJS certified Web Developer</Link>
     
     <Link href="https://perceptron10100sdas.hashnode.dev/" className='text-white font-semibold'>perceptron10100sdas@hashnode</Link>
     </div>
     <Feed/>
     <Project/>
<Footer/>
    </main>
  )
}
