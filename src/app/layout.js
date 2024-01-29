

import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Example from '@/components/Drawoutline'
import Sidebar from '@/components/Sidebar'






const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Sambhav Das portfolio',
  description: 'Hi This is Sambhav Das,A tech enthusiastic.I am a nextjs MERN full stack web developer and this is my personal portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className='bg-black'>
       
        {children}
        <Sidebar/>
       <Example/>
       <h3 className='text-white bg-slate-900'>Copyrights@perceptron10100sdas</h3>
        </div>
        
        </body>

       
    </html>
  )
}
