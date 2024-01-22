import Link from "next/link";
import React from "react";
import Button from "../Button";
import logomob from "../../public/assets/images/Logo.png";
import logodesk from "../../public/assets/images/MetaBlog.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <section className="border-t lg:mt-20 border-white/10"  style={{backgroundColor : '#141624'}}>
      <div className='container px-2 lg:px-0 mx-auto mt-10 lg:pt-12 lg:pb-9 text-white  '>
        <div className='grid  grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:py-5  '>
          <div className='col-span-2 lg:col-span-1'>
            <h1 className='mb-7'>About</h1>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className='mt-4'>
              <strong>Email :</strong>{" "}
              <small className='text-gray-500'>info@jstemplate.net</small>
              <br />
              <strong>Phone :</strong>{" "}
              <small className='text-gray-500'> 880 123 456 789</small>
            </div>
          </div>

          <div className='mx-auto '>
            <h1 className='mb-7'>Quick Links</h1>

            <div className='flex flex-col gap-1 text-gray-500'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Archived</Link>
              <Link href={"/"}> Author</Link>
              <Link href={"/"}>Contact</Link>
            </div>
          </div>

          <div className=' mx-auto '>
            <h1 className='mb-7'>Category</h1>
            <div className='flex flex-col gap-1 text-gray-500 '>
              <Link href={"/"}>Lifestyle</Link>
              <Link href={"/"}>Technology</Link>
              <Link href={"/"}>Travel</Link>
              <Link href={"/"}>Business</Link>
              <Link href={"/"}>Economy</Link>
              <Link href={"/"}>Sports</Link>
            </div>
          </div>

          {/* footer form */}

          <div className="col-span-2 mx-auto lg:col-span-1">
            <div
              className=' p-8 rounded-md mx-3 mb-8  text-white'
              style={{backgroundColor: "#242535"}}
            >
              <div className='text-center mb-7'>
                <h1>Weekly Newsletter</h1>
                <p className='text-gray-500'>
                  Get blog articles and offers via email
                </p>
              </div>

              <input
                type='text'
                className='w-full my-2 bg-gray-900 border border-gray-400 py-2 px-1'
                placeholder='Enter email..'
              />
              <Button className={"w-full"}>Subscribe</Button>
            </div>
          </div>
        </div>

        <hr />

        <div className='grid lg:grid-cols-2 gap-3 mt-7'>
          <div>
            <div className='flex items-center'>
              <Image src={logomob} className='w-10 me-3 logo' alt=' Logo' />
              <div>
                <Image src={logodesk} className='w-24 me-3 logo' alt=' Logo' />
                <p className='text-gray-500'>
                  © JS Template 2023. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex gap-7 text-gray-500 justify-center lg:justify-end'>
              <Link href={"/"}>Terms of Use</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Footer;
