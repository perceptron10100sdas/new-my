"use client";

import { motion, AnimatePresence } from "framer-motion";

export const newyear = () => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 2}}
        
      >
       Happy New Year 2024
      </motion.div>
    </AnimatePresence>
  </>
);