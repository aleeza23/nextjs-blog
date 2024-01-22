import React from "react";

const SinglePostContainer = ({children}) => {
  return (
    <>
      <div className='container mx-auto'>
        <div className=' lg:max-w-[70%] mx-auto lg:px-0 px-2'>{children}</div>
      </div>
    </>
  );
};

export default SinglePostContainer;
