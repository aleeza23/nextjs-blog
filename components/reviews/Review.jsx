import React from "react";
import { FaInstagram, FaTwitter ,FaYoutube ,FaFacebook  } from "react-icons/fa";
import user from "../../public/assets/images/user.png";
import Image from "next/image";
const Review = () => {
  return (
    <>
      <div className='container my-5 rounded-lg text-gray-400 mx-auto p-5 lg:p-12' style={{ backgroundColor: '#242535' }} >
        <div className='flex flex-col gap-5 lg:max-w-[40%] mx-auto'>
          <div className='flex items-center justify-center gap-2'>
            <Image src={user} className=' me-3 h-14 w-14 opacity-35 logo' alt=' Logo' />
            <div>
              <h5 className="text-white">Jonathan Doe</h5>
              <p>Collaborator & Editor</p>
            </div>
          </div>
          <p className="text-center">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>

          <div className="flex items-center justify-center gap-3 text-white">
            <span className="bg-white/20 p-3 rounded-md">{<FaFacebook />}</span>
            <span className="bg-white/20 p-3 rounded-md">{<FaYoutube />}</span>
            <span className="bg-white/20 p-3 rounded-md">{<FaInstagram />}</span>
            <span className="bg-white/20 p-3 rounded-md">{<FaTwitter />}</span>

          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
