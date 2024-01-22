import React from 'react';

export const Ads = () => {
  return (
    <div className='container mx-auto px-2'>
      <div
        className=' text-center mx-auto lg:w-3/4	rounded-lg'
        style={{ backgroundColor: '#242535' }}
      >
        <p className='pt-5 text-lg font-sans' style={{ color: '#696A75' }}>
          Advertisement
        </p>
        <p className='font-[700] text-xl font-sans' style={{ color: '#696A75' }}>
          You can place ads
        </p>
        <p className='pb-5 text-xl font-sans' style={{ color: '#696A75' }}>750x100</p>
      </div>
    </div>
  );
};

export default Ads;
