import React from "react";
import { motion } from "framer-motion";

export default function Curve() {
  const windowHeight = window.innerHeight;
  const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${
    windowHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${windowHeight} Q100 ${
    windowHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return (
    <svg className="absolute top-0 left-[-99px]  w-full h-full pointer-events-none">
      <motion.path
        className="fill-current text-yellow-300"
        variants={curve}
        initial="initial"
        animate="enter"
      ></motion.path>
    </svg>
  );
}
