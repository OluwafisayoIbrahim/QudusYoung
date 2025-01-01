"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import SocialLinks from "./components/SocialLinks";
import Link from "next/link";
import Typewriter from "./assets/Typewriter";
import { motion } from "framer-motion";

const MagneticButton = ({ href, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false); // Track if we are in the client

  // Only set the client flag after component mounts (client side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const center = {
      x: left + width / 2,
      y: top + height / 2,
    };

    // Calculate distance from center (max 30px movement)
    const maxDistance = 30;
    const x = (clientX - center.x) / 3;
    const y = (clientY - center.y) / 3;

    setPosition({
      x: Math.max(Math.min(x, maxDistance), -maxDistance),
      y: Math.max(Math.min(y, maxDistance), -maxDistance),
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <Link href={href}>
      <motion.button
        className="px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors w-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {children}
      </motion.button>
    </Link>
  );
};

const Page = () => {
  return (
    <motion.main
      className="min-h-screen bg-black p-6 lg:p-12 flex"
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      
    >
      <div className="flex flex-col justify-center max-w-4xl mx-auto ml-4 lg:ml-32 mt-20">
        <h1 className="text-4xl lg:text-6xl text-white mb-8 space-y-4">
          <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello!{" "}
          </span>
          <br />
          <div className="w-full overflow-hidden">
            <Typewriter />
          </div>
        </h1>
        <div className="flex items-center mt-2 space-x-4">
          <MagneticButton href="https://qudusyoung.tiiny.site/">
            Resume
          </MagneticButton>
          <SocialLinks />
        </div>
      </div>
    </motion.main>
  );
};

export default Page;
