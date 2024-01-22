import React from "react";
import Image from "next/image";
import Button from "./Button";
const HeroText = ({className, avatar, headingStyle}) => {
  return (
    <>
      <Button>Technology</Button>
      <h1
        className={`text-white ${headingStyle} font-heading-font mt-4 lg:text-2xl font-bold`}
      >
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <div className='flex text-white items-center  gap-3'>
        <Image src={avatar} className=' me-3 mt-3 logo' alt=' Logo' />
        <small className={`text-gray-500 ${className}`}>Jason Francisco</small>
        <small className={`text-gray-500 ${className}`}>August 20, 2022</small>
      </div>
    </>
  );
};

export default HeroText;
