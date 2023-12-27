

import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Sambhav Das portfolio',
  description: 'Hi This is Sambhav Das,A tech enthusiastic.I am a nextjs MERN full stack web developer and this is my personal portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className='bg-gradient-to-r from-blue-950 to-black'>
        
        {children}
        <Footer/>
       
        </div>
        
        </body>

       
    </html>
  )
}
