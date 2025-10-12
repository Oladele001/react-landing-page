import React from "react";
import mobile from "../assets/mobie-header.svg";
import phone from "../assets/mo-phone.svg";

const Header = () => {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-center text-2xl">Designed for the future</h2>
      </div>
      <div className=" absolute mt-11 ">
        <img src={mobile} alt="" />
      </div>

      <div className="mt-96">
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

      <div className="">
        <div className=" items-center relative z-10 ">
          <img src={phone} alt="" />
        </div>
        <div className=" h-96 w-full bg-slate-600 absolute -mt-52 rounded-tr-[5rem] ">
          <h2 className="text-3xl text-white pt-3 mt-48 text-center">State of the Art Infrastructure</h2>
          <p className="text-xl text-neutral-200 text-center mt-11">  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
