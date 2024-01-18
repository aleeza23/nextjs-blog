import React from "react";
import HeroText from "./HeroText";
import userImage from "@/public/assets/images/user-img01.png";


const HeroBox = () => {
  return (
    <>
      <div className='grid  grid-cols-4  absolute left-28 md:right-auto  right-3 -bottom-10 '>
        <div className='md:col-span-2 xl:col-span-1 col-span-4 shadow-lg bg-primary-color px-5 py-5 '>
         <HeroText avatar={userImage}/>
        </div>
      </div>
    </>
  );
};

export default HeroBox;
