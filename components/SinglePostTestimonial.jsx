import React from "react";

const SinglePostTestimonial = ({heading, text}) => {
  return (
    <>
      <div className='text-gray-400 my-3'>
        <h1 className='text-white font-heading-font mt-6 font-bold text-2xl '>
          {heading}
        </h1>
        <p className='font-text-font text text-2xl my-3'>{text}</p>
      </div>
    </>
  );
};

export default SinglePostTestimonial;
