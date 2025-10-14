import React from "react";
import mobile from "../assets/mo-phone.svg";
import phone from "../assets/mobie-header.svg";
import illustration from "../assets/illustration-mobile.svg";

const Header = () => {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-center text-2xl">Designed for the future</h2>
      </div>

      <div className="md:flex md:flex-row-reverse md:mt-80 justify-between">

      <div className=" mt-24 md:-mt-44">
        <img src={mobile} alt="" />
      </div>

      <div className=" -mt-[15rem] md:w-[32rem] text-start h-fit md:pl-20">
      <div className="mt-96 md:mt-0">
        <h2 className=" text-3xl text-center ">
          Introducing an extensible editor
        </h2>
        <p className="text-center p-5">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </div>

      <div className="mt-3">
        <h2 className="text-3xl text-center">Robust content management</h2>
        <p className="text-center p-5">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
      </div>
      </div>
      

        <div className=" md:flex md:justify-between md:pl-20 md:pr-14 h-[35rem] md:h-[25rem] mt-44 w-full bg-slate-600 border-2   rounded-tr-[5rem] rounded-bl-[5rem] ">
        <div className=" items-center -mt-44 md:-mt-14 ">
          <img src={phone} alt="" />
        </div>
        <div className="md:w-[30rem] pt-10">
          <h2 className="text-3xl text-white pt-3 text-center">
            State of the Art Infrastructure
          </h2>
          <p className="text-xl text-neutral-200 text-justify p-2 ">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
        </div>

      <div className=" mt-10 md:flex md:justify-between  md:mt-0 md:pb-10 md:pr-28">
        <div className="mt-20 md:mt-60">
          <img src={illustration} alt="" />
        </div>
        <div className=" mt-16 md:w-96 md:mt-52 h-96 ">
          <div className="">
            <h2 className="text-gray-800 text-3xl text-center">
              Free, open, simple
            </h2>
            <p className=" text-gray-400 text-center mt-5 md:text-start">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="p-4 mt-5">
            <h2 className="text-gray-800 text-3xl text-center">
              Powerful tooling
            </h2>
            <p className="text-gray-400 text-center mt-2 md:text-justify">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
