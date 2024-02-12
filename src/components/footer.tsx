"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocalTime from "./localtime";
import BackToTopButton from "./scrolltop";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <footer className="w-full min-h-screen bg-black flex justify-start items-center flex-col p-10 gap-y-20">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" p-5 max-w-[1200px] mt-14 relative"
      >
        <p className="font-helvetica font-semibold text-slate-200 text-center">
          Got a project? Need an unfair advantage?
        </p>
        <p className="relative tracking-wider font-helvetica font-bold text-9xl text-slate-200 uppercase text-center">
          get in touch
        </p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="w-2 h-1 bg-white absolute left-0"
              initial={{ width: "0px", originX: 0, left: 0 }}
              animate={{ width: "100%", originX: 0, left: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ width: "0px", originX: 0, left: "100%" }}
            />
          )}
        </AnimatePresence>
      </div>
      <nav className="text-white grid grid-cols-2 lg:grid-cols-3 w-full mt-10 font-helvetica list-none gap-10">
        <div className="w-full">
          <h2 className="border-white border-b mb-5 uppercase ">navigation</h2>
          <li>home</li>
          <li>about</li>
          <li>services</li>
          <li>contact</li>
        </div>

        <div className="w-full">
          <h2 className="border-white border-b mb-5 uppercase ">
            Social Media
          </h2>
          <li>facebooke</li>
          <li>instagram</li>
          <li>linked in</li>
        </div>

        <div className="w-full">
          <h2 className="border-white border-b mb-5 uppercase">Tools</h2>
          <li>figma</li>
          <li>canva</li>
          <li>wordpress</li>
          <li>excel</li>
          <li>google sheets</li>
        </div>
      </nav>

      <div className=" w-full flex flex-col  justify-center items-start gap-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <p className="font-helvetica font-bold text-5xl text-slate-200 ">
            ©2024
          </p>
          <p className=" font-helvetica font-bold text-5xl text-slate-200 ">
            MIKES MAGUATE
          </p>
        </div>

        <LocalTime />
        <BackToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
