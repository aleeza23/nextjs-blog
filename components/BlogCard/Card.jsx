import React from 'react';

const Card = ({ imageSrc, heading, userName, userImage, date }) => {
  return (
    <div
      className='max-w-md mx-auto bg-transparent rounded-xl overflow-hidden'
      style={{ border: '1px solid #202131' }}
    >
      <img
        className='w-full h-60 p-2 object-cover object-top rounded-t-xl'
        src={imageSrc}
        alt='Card Image'
      />

      <div className='p-6'>
        <button
          className=' text-blue-700 rounded-lg px-3 py-1 mb-4'
          style={{ backgroundColor: '#1B1E34' }}
        >
          Technology
        </button>

        <h2 className='font-bold text-white text-xl mb-2'>{heading}</h2>

        <div className='flex justify-between items-center mb-4'>
          <div className='flex justify-center align-content-center '>
            <img
              className='w-10 h-10 rounded-full mr-4'
              src={userImage}
              alt='User Image'
            />
            <p className=' m-0 font-semibold' style={{ color: '#97989F' }}>
              {userName}
            </p>
          </div>
          <div>
            <p className='m-0' style={{ color: '#97989F' }}>
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
