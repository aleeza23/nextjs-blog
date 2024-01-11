import React from "react";

const Button = ({children}) => {
  return <>
     <button className='inline-flex lg:block  items-center bg-secondary-color border-0 py-2 px-5 focus:outline-none font-bold  text-white mt-4 md:mt-0'>
         {children}
        </button>
  </>;
};

export default Button;
