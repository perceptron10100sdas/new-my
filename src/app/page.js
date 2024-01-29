"use client"
import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

import { useState,useEffect } from 'react'
import dynamic from 'next/dynamic'
import {motion} from "framer-motion"
import { PageWrapper } from './page-wrapper'
import Footer from '@/components/Footer'
import { HoverImageLinks } from '@/components/HoverLInks'
import Sidebar from '@/components/Sidebar'
import { ScreenFitText } from '@/components/cutout'
import { Alert } from '@mui/material'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls } from 'three-stdlib'
extend({ OrbitControls, TransformControls })




import { Html } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";
import {  Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./../components/utils";




















export default function Home() {
 
 
 
  
  return (
    <PageWrapper>
     <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
       
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
      <motion.div initial={{ scale:0}} animate={{ scale: 1}}
  transition={{duration:6, ease:"easeInOut" }}  ><Image src='/iconimg.webp'
       width="300"
       height="100" className='ring-4 hover:ring-black rounded-full mx-10 mt-5 '/></motion.div>
      <h1 className='text-white font-thin'>This is</h1>
      <div>
       <h1 className='text-transparent text-7xl bg-clip-text bg-gradient-to-r from-white to-sky-500  font-thin animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  overline'> Sambhav Das</h1></div>
       <p className='text-white font-extralight text-2xl'>MERN Nextjs Web developer</p>
       </div>
    </div>
       </PageWrapper>
      )
  }
  const PointCircle = () => {
    const ref = useRef(null);
  
    useFrame(({ clock }) => {
      if (ref.current?.rotation) {
        ref.current.rotation.z = clock.getElapsedTime() * 0.05;
      }
    });
  
    return (
      <group ref={ref}>
        {pointsInner.map((point) => (
          <Point key={point.idx} position={point.position} color={point.color} />
        ))}
        {pointsOuter.map((point) => (
          <Point key={point.idx} position={point.position} color={point.color} />
        ))}
      </group>
    );
  };
  
  const Point = ({ position, color }) => {
    return (
      <Sphere position={position} args={[0.1, 10, 10]}>
        <meshStandardMaterial
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.5}
          color={color}
        />
      </Sphere>
    );
  };
  