import React from "react";

const BreadCrumbs = () => {
  return <>
    <div className="container mx-auto lg:my-10 mb-6 ">
<div className="text-center text-white">
    <h1 className=" font-heading-font text-2xl font-bold">Page Title</h1>
    <div className="flex items-center justify-center gap-3 mt-3 text-gray-500">
    <small>Home</small> <span className="text-white">|</span> <small>Link One</small>
    </div>
    
</div>
    </div>
  </>;
};

export default BreadCrumbs;
