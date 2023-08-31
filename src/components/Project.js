import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function project() {
  return (
    
    <div>
    <div  className='bg-gradient-to-r from-orange-500 to-yellow-400 '>
      <h1 className=' text-3xl flex justify-end'>#Projects made by me...</h1>
      </div>
      <div>
      <div className='bg-gradient-to-r   from-blue-950 to-black  flex-auto'>
      <Image src="https://media.licdn.com/dms/image/D4D22AQGB04FnzGwsRw/feedshare-shrink_800/0/1691300803405?e=1696464000&v=beta&t=zPMp8AG9mDGGPl3DE_Dn1vLHz31fBgRAzEE7n5_PPHU"
      width={500}
      height={500}
     
      className='ring-2 hover:ring-red-500 rounded-md'
      />
      
      <div className='flex justify-end'><Link href="https://github.com/perceptron10100sdas/starbucks" className='font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-black py-1 px-1 rounded-lg mr-1'>Source Code for Google</Link></div>
      <Link href="https://google-clone-lyart-gamma.vercel.app/" className='text-2xl text-blue-950 hover:text-yellow-600 font-semibold bg-yellow-500 hover:bg-blue-950 rounded-md hover:underline'>Google clone </Link>
      <p className='text-white'>A Google clone developed by me using nextjs13 and tailwind css and powered by google search API</p>
     
     
        <Image src="https://media.licdn.com/dms/image/sync/D4D27AQELVH_B4fZxYw/articleshare-shrink_800/0/1692787656758?e=1693998000&v=beta&t=N-rabvdLiDPfV0mK64jZCws2rcBBa7QQ6mBEjsBUoAU"
        width={500}
        height={500}
        className='ring-2 hover:ring-black rounded-none'/>
      
        <div className='flex justify-end'><Link href="https://github.com/perceptron10100sdas/imdb" className='font-bold text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500py-1 px-1 rounded-lg mr-1'>Source Code for Imdb</Link></div>
        <Link href="https://imdb-perceptron10100.vercel.app/"  className="font-bold bg-amber-500 py-1 px-1 rounded-lg mr-1">IMDB clone</Link>
        <p className='text-white'>Imdb clone made using nextjs 13 and tailwind css and data fetched by tmdb</p>
        
<Image src="https://media.licdn.com/dms/image/D4D2DAQFIbwUnIWZ0ig/profile-treasury-image-shrink_800_800/0/1692787404978?e=1693998000&v=beta&t=tiuOTHPECR5nzy8x3yTNdOmbhNRxfGpviNYwkW2ExvM"

width={500}
height={500}
className='ring-2 hover:ring-green-950 rounded-none'/>

<div className='flex justify-end'><Link href="https://github.com/perceptron10100sdas/starbucks" className='font-bold text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-black py-1 px-1 rounded-lg mr-1'>Source Code for Starbucks</Link></div>
<Link href="https://astounding-kringle-914635.netlify.app/" className='text-2xl text-white bg-gradient-to-r from-green-950 to-black py-1 px-1 rounded-md font-bold'>Starbucks Clone</Link>
<p className='text-white'>Starbucks clone made using React and inline css</p>

<h1 className='text-2xl bg-gradient-to-r from-fuchsia-700 to-black italic'>More projects coming up including instagram,X etc...</h1>
      </div>
      
      </div>
    </div>
   
  )
}
