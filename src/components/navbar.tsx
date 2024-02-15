"use client";

import Link from "next/link";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import StraggerLetters from "./staggerLetters";

import { useState } from "react";
import Curve from "./curve";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container max-w-[1480px] mx-auto px-2 lg:px-0  mt-3 border-b-4 border-black h-[70px] borer-2 flex justify-between items-center bg-[#F3F3F3] ">
      <div className="font-helvetica font-black text-[40px] text-[#373737]">
        ./Folio
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="w-[60px] rounded-full h-[60px] flex flex-col justify-center items-center gap-2 cursor-pointer z-50 lg:hidden bg-gray-200"
      >
        <div
          className={`w-[40px] h-[3px] bg-black rounded-xl transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]  ${
            open ? "rotate-45 translate-y-2 " : "rotate-0 "
          }   origin-center`}
        ></div>
        <div
          className={`w-[40px] h-[3px] bg-black rounded-xl transition-all duration-300  ease-[cubic-bezier(0.83,0,0.17,1)]   ${
            open ? "-rotate-45 -translate-y-0.5" : "rotate-0"
          }   origin-center`}
        ></div>
      </div>

      <nav className="hidden lg:flex justify-center items-center gap-5 list-none font-helvetica  font-medium">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>
              <StraggerLetters text={link.name} />
            </Link>
          </li>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        {open ? (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
            exit={{ x: "100%" }}
            className="absolute flex flex-col justify-center items-center gap-5 text-4xl bottom-0 top-0 right-0  left-[40%]  bg-yellow-300 list-none font-helvetica  font-bold z-40"
          >
            {links.map((link, index) => (
              <li key={index}>
                <Link onClick={() => setOpen(!open)} href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
            <Curve />
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
