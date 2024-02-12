"use client";
import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [top, setOnTop] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log("test");
  };

  useEffect(() => {
    scrollToTop();
  }, [top]);

  return (
    <button
      onClick={() => setOnTop(!top)}
      className="rounded-full bg-white  text-black p-10 hidden lg:block
     "
    >
      TOP
    </button>
  );
};

export default BackToTopButton;
