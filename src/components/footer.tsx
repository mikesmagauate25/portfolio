import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-96 bg-black mx-auto flex flex-col lg:flex justify-center items-center gap-10">
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="text-white font-helvetica text-2xl">./FOLIO</div>
        <div className="bg-white w-full h-[2px]"></div>
        <div className="text-white">@ mikes maguate</div>
      </div>
      <div className="flex gap-10">
        <a className="text-white text-3xl" href="#">
          Facebook
        </a>
        <a className="text-white text-3xl" href="#">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
