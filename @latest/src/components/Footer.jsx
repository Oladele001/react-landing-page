import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="h-[45rem] bg-gray-700 rounded-tr-[8rem] md:h-[20rem]">
      <img src={logo} alt="" className="m-auto pt-10" />
      <div className=" flex flex-col items-center md:flex-row md:justify-between p-14 ">
        <div>
          <h2 className="text-gray-50 pt-9 pb-4 md:pt-0 md:pb-0"> Product </h2>
          <p className="text-gray-100">
            <a href="">Overview</a>
          </p>
          <p>
            <a href="">Pricing</a>
          </p>
          <p>
            <a href="">Marketplace</a>
          </p>
          <p>
            <a href="">Features</a>
          </p>
          <p>
            <a href="">Integrations</a>
          </p>
        </div>
        <div className="">
          <h2 className="text-gray-50 pt-5 pb-3 md:pt-0 md:pb-0">Company</h2>
          <p>
            <a href="">About</a>
          </p>
          <p>
            <a href="">Team</a>
          </p>
          <p>
            <a href="">Blog</a>
          </p>
          <p>
            <a href="">Careers</a>
          </p>
        </div>
        <div className="">
          <h2 className="text-gray-50 pt-5 pb-3 md:pt-0 md:pb-0"> Connect</h2>

          <p>
            <a href="">Contact</a>
          </p>
          <p>
            <a href="">Newsletter</a>
          </p>
          <p>
            <a href="">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
