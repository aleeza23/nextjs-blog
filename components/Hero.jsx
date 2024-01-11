import React from "react";
import DesktopNavs from "./DesktopNavs";
import HeroBox from "./HeroBox";

const Hero = () => {
  return (
    <>
      <div className='hero-main relative bg-cover rounded-none  '>
        <DesktopNavs />
        <HeroBox />
      </div>
    </>
  );
};

export default Hero;
