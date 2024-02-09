import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { SiTwitter,SiGithub,SiLinkedin } from "react-icons/si";
import { SiHashnode } from "react-icons/si";

const Card = () => {
  return (
<div className="flex flex-col gap-y-7"  > <div className="flex justify-center">
      <a
      href="https://twitter.com/imSambhavDas"
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <SiTwitter className="absolute z-10  -bottom-5 right-2 text-9xl text-slate-100 group-hover:text-black  group-hover:rotate-12 transition-transform duration-300" />
      <SiTwitter className="mb-2 text-2xl text-white group-hover:text-black  transition-colors relative z-10 duration-300" />
      <h3 className="font-thin   text-white group-hover:none  relative z-10 duration-300 text-center text-3xl group-hover:text-sm group-hover:text-black">
        Twitter
      </h3>
      <p className="text-black text-center group-hover:text-black relative z-10 duration-300 group-hover:white group-hover:text-4xl group-hover:mb-3 ">
      
        @imSambhavDas
      </p>
    </a></div>
    <div className="flex justify-center">
      <a
      href="https://www.linkedin.com/in/sambhav-das-630ba1278/"
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <SiLinkedin className="absolute z-10  -bottom-5 right-2 text-9xl text-blue-500 group-hover:text-white group-hover:rotate-12 transition-transform duration-300" />
      <SiLinkedin className="mb-2 text-2xl text-blue-500 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-thin   text-blue-500 group-hover:none  relative z-10 duration-300 text-center text-3xl group-hover:text-sm group-hover:text-white">
        LinkedIn
      </h3>
      <p className="text-black text-center group-hover:text-white relative z-10 duration-300 group-hover:white group-hover:text-4xl group-hover:mb-3 ">
      
        @SambhavDas
      </p>
    </a></div>
    <div className="flex justify-center">
      <a
      href=""
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-yellow-600 to-blue-500  translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <FiMail className="absolute z-10  -bottom-5 right-2 text-9xl text-slate-100 group-hover:text-black  group-hover:rotate-12 transition-transform duration-300" />
      <FiMail className="mb-2 text-2xl text-white group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-thin text-red-500  group-hover:none  relative z-10 duration-300 text-center text-3xl group-hover:text-sm group-hover:text-black">
        Gmail
      </h3>
      <p className="text-black text-center group-hover:text-black relative z-10 duration-300 group-hover:white group-hover:text-4xl group-hover:mb-3 ">
      
       sambhavdas.2020@gmail.com
      </p>
    </a></div>
    <div className="flex justify-center">
      <a
      href="https://github.com/perceptron10100sdas"
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 bg-purple-950 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <SiGithub className="absolute z-10  -bottom-5 right-2 text-9xl text-slate-100 group-hover:text-black  group-hover:rotate-12 transition-transform duration-300" />
      <SiGithub className="mb-2 text-2xl text-white group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-thin   text-white group-hover:none  relative z-10 duration-300 text-center text-3xl group-hover:text-sm group-hover:text-black">
        Github
      </h3>
      <p className="text-black text-center group-hover:text-black relative z-10 duration-300 group-hover:white group-hover:text-4xl group-hover:mb-3 ">
      
       @perceptron10100sdas
      </p>
    </a></div>
    <div className="flex justify-center">
      <a
      href="https://perceptron10100sdas.hashnode.dev/"
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-black"
    >
      <div className="absolute inset-0 bg-blue-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <SiHashnode className="absolute z-10  -bottom-5 right-2 text-9xl text-blue-500 group-hover:text-white  group-hover:rotate-12 transition-transform duration-300" />
      <SiHashnode className="mb-2 text-2xl text-blue-500 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-thin   text-blue-500 group-hover:none  relative z-10 duration-300 text-center text-3xl group-hover:text-sm group-hover:text-white">
       Hashnode
      </h3>
      <p className="text-black text-center group-hover:text-white relative z-10 duration-300 group-hover:white group-hover:text-4xl group-hover:mb-3 ">
      
       @perceptron10100sdas
      </p>
    </a></div>
    

    </div>
  );
};

export default Card;