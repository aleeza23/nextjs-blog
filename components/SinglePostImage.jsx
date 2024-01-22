import Image from "next/image";
import React from "react";


const SinglePostImage = ({image}) => {
  return <>
    <Image src={image} className="w-full my-7"  alt='img'/>
  </>;
};

export default SinglePostImage;
