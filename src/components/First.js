import React, { useEffect, useRef } from "react";
import {motion} from "framer-motion"

export const ScreenFitText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="flex h-screen w-full items-center overflow-hidden  bg-black bg-cover bg-center "
      ref={containerRef}
    >
      <span
        className="absolute sm:bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-600  rotate-90 sm:rotate-0 backdrop-blur-sm"
        ref={textRef}
      ><motion.h1 i  className="text-white   ">Full stack </motion.h1>
        SAmbhav das<motion.h1 className="text-white ">Web developer </motion.h1>
      </span>
    </div>
  );
};