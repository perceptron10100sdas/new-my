"use state"
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";




const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Example = () => {
  const [selected, setSelected] = useState("Frontend");
  return (
    <div
      className={`grid h-[200px] place-content-center px-8 transition-colors ${
        selected === "Frontend" ? "bg-black" : "bg-black"
      }`}
    >
      <SliderToggle selected={selected} setSelected={setSelected} />
    </div>
  );
};

  const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div>
         <motion.p className='font-thin text-4xl text-white mb-3  italic text-center overline shadow-md ' initial={{ y:-100}} animate={{ y: 0}}
  transition={{duration:3, ease:"linear" }}> {
        selected === "Frontend" ? "I make websites look cooler": "I manage routes"
      }</motion.p> 

  
    <div className="relative flex w-fit items-center rounded-md">
      <Link href="/frontend"><button
        className={`${TOGGLE_CLASSES} ${
          selected === "Frontend" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setSelected("Frontend")
          ;
        }}
      >
        <span className="relative z-10 text-4xl font-thin">Frontend</span>
      </button></Link>
      <Link href="/backend"><button
        className={`${TOGGLE_CLASSES} ${
          selected === "Backend" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setSelected("Backend");
        }}
      >
       
       
        <span className="relative z-10 text-4xl font-thin">Backend</span>
      </button></Link>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "Backend" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>  </div>
  );
};

export default Example;