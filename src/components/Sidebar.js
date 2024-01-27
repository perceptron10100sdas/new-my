import React from 'react'
import { HoverImageLinks } from './HoverLInks'
import { HoverImageLinks1 } from './HoverLInks1'
import { HoverImageLinks2 } from './Hoverlinks2'

export default function Sidebar() {
  return (
   
    <div className=' md:flex justify-evenly mx-1 py-3  transform sm:rotate-90 md:rotate-0'>
      <HoverImageLinks/>
    <HoverImageLinks1/>
    <HoverImageLinks2/>
    </div>
  )
}
