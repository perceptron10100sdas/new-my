"use client"
import React from 'react'
import Image from 'next/image'
import { PageWrapper } from '../page-wrapper'
import { motion } from "framer-motion-3d"
import Example from '@/components/barloader'
import Link from 'next/link'

import Card from '@/components/contacts'




export default function contact() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <PageWrapper>
   
    
<Example/>
 



    <Card/>
    </PageWrapper>
 
       
    
  )
}
