"use client";
import logo from "@/public/assets/images/logodesktop.png";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import MobileNavs from "./MobileNavs";
import {motion} from "framer-motion";
import Navs from "./Navs";
import Button from "./Button";

const DesktopNavs = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <nav className='relative px-5   container mx-auto   py-7 flex justify-between items-center'>
        {/* logo */}
        <Link href='/' className=' ms-2 md:me-24   hidden sm:flex'>
          <Image src={logo} className='w-32 me-3 logo' alt=' Logo' />
        </Link>

        {/* toggle btn */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className='inline-flex items-center transition  p-2 text-sm text-blue-color rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        >
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='#fff'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              clip-rule='evenodd'
              fill-rule='evenodd'
              d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
            ></path>
          </svg>
        </button>

        {/* navs */}
        <ul className='hidden absolute top-1/2 left-1/2 text-white cursor-pointer text-xl font-normal font-heebo transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-right lg:w-auto lg:space-x-6'>
          <Navs />
        </ul>

       <Button>Add a Blog</Button> 
      </nav>

      {/* mobile navs */}
      {open && <MobileNavs toggleOpen={toggleOpen} />}
      {open && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
          onClick={() => setOpen(false)}
          drawer-backdrop=''
          className='bg-gray-900/50 sm:hidden fixed inset-0 z-30'
        ></motion.div>
      )}
    </>
  );
};

export default DesktopNavs;
