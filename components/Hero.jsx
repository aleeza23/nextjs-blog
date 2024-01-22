import React from "react";
import DesktopNavs from "./DesktopNavs";
import HeroBox from "./HeroBox";

const Hero = ({children}) => {
  return (
    <>
      <div className='hero-main relative bg-cover rounded-none mb-20  '>
       {children}
      </div>
    </>
  );
};

export default Hero;
