"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';

const NoSSRYourComponent= ({ children }) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.57 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);
const YourComponent = dynamic(() => Promise.resolve(NoSSRYourComponent), {
    ssr: false,
  })
  
  export default YourComponent