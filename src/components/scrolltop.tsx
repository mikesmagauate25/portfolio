"use client";
import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [top, setOnTop] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [top]);

  return (
    <button
      onClick={() => setOnTop(!top)}
      className="rounded-full bg-yellow-300  text-black p-10 hidden lg:block font-helvetica font-semibold
     "
    >
      TOP
    </button>
  );
};

export default BackToTopButton;
