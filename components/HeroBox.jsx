import React from "react";
import Button from "./Button";
import Image from "next/image";
import userImage from "@/public/assets/images/user-img01.png";

const HeroBox = () => {
  return (
    <>
      <div className='grid  grid-cols-4  absolute left-3 md:right-auto  right-3 -bottom-10 '>
        <div className='md:col-span-2 xl:col-span-1 col-span-4 shadow-lg bg-primary-color px-5 py-5 '>
          <Button>Technology</Button>
          <h1 className='text-white font-heading-font mt-4 text-2xl font-bold'>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className='flex text-white items-center gap-3'>
            <Image src={userImage} className=' me-3 mt-3 logo' alt=' Logo' />
            <small className="text-gray-500">Jason Francisco</small>
            <small className="text-gray-500">August 20, 2022</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBox;
