import React from "react";

const Main = ({children}) => {
  return (
    <main className='lg:max-w-[1700px] container bg-black mx-auto'>
      {children}
    </main>
  );
};

export default Main;
