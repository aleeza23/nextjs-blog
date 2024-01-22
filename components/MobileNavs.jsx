import {motion} from "framer-motion";
import React from "react";
import Navs from "./Navs";

const MobileNavs = () => {
  return (
    <>
      <motion.aside
        initial={{x: -300}}
        animate={{x: 0}}
        transition={{duration: 0.7}}
        className='fixed px-3  w-80  bg-black top-0  z-40  sm:hidden h-screen pt-5 border-r sm:translate-x-0'
      >
        <Navs />
      </motion.aside>
    </>
  );
};

export default MobileNavs;
