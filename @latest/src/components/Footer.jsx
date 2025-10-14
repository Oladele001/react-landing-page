import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="h-[45rem] mt-16 bg-gray-700 rounded-tr-[8rem] md:h-[20rem] md:mt-20">
      <img src={logo} alt="" className="m-auto pt-10" />
      <div className=" flex flex-col items-center md:flex-row md:justify-between p-14 ">
        <div>
          <h2 className="text-gray-50 pt-9 pb-4 md:pt-0 md:pb-0"> Product </h2>
          <p className="text-gray-100">
            <a href="" className='text-gray-400' >Overview</a>
          </p>
          <p>
            <a href="" className='text-gray-400' >Pricing</a>
          </p>
          <p>
            <a href="" className='text-gray-400' >Marketplace</a>
          </p>
          <p>
            <a href="" className='text-gray-400' >Features</a>
          </p>
          <p>
            <a href="" className='text-gray-400' >Integrations</a>
          </p>
        </div>
        <div className="">
          <h2 className="text-gray-50 pt-5 pb-3 md:pt-0 md:pb-0">Company</h2>
          <p>
            <a href="" className='text-gray-400' >About</a>
          </p>
          <p>
            <a href="" className='text-gray-400' >Team</a>
          </p>
          <p>
            <a href="" className='text-gray-400' >Blog</a>
          </p>
          <p>
            <a href="" className='text-gray-400' >Careers</a>
          </p>
        </div>
        <div className="">
          <h2 className="text-gray-50 pt-5 pb-3 md:pt-0 md:pb-0"> Connect</h2>
          <p>
            <a href="" className='text-gray-400' >Contact</a>
          </p>
          <p>
            <a href="" className='text-gray-400' >Newsletter</a>
          </p>
          <p>
            <a href="" className='text-gray-400'>LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
