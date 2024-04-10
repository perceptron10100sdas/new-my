import { motion } from "framer-motion";

const Example = () => {
  return (
    <div className="grid place-content-center bg-black px-4 py-20 ">
      <div className="flex  space-x-5">
      <h1 className="font-light text-3xl text-white ">Let's Connect</h1>
      <BarLoader /></div>
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-slate-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-slate-600" />
      <motion.div variants={variants} className="h-12 w-2 bg-slate-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-slate-200" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
    </motion.div>
  );
};

export default Example;