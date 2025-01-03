"use client";
import React, { useEffect, useState } from "react";
import SocialLinks from "./components/SocialLinks";
import Link from "next/link";
import Typewriter from "./assets/Typewriter";
import { motion } from "framer-motion";
import {
  AccessBankIcon,
  BandGIcon,
  KerryGoldIcon,
  MorningFreshIcon,
  RightArrowIcon,
  ShinguarsIcon,
  WPXIcon,
  PNXIcon,
  PremierCoolIcon,
  OlogeIcon,
  KleenUpIcon,
  TitilopeIcon,
} from "./assets/SocialMediaIcons";


const MagneticButton = ({ href, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false); 

 
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
    return null; 
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
    <>
      <main
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
            <div className="w-full sm:w-full lg:w-auto mt-4 sm:mt-4 lg:mt-0">
              <Link
                href="/contact"
                passHref
                className="text-white xl:flex xl:items-center xl:relative xl:space-x-2 xl:mt-20 xl:text-xl xl:ml-44 sm:text-sm sm:flex sm:absolute sm:left-0 sm:mt-10 sm:ml-12"
              >
                <span>Get in touch</span>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <RightArrowIcon className="text-white" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <section className="p-1 lg:p-2 bg-black flex flex-col items-center">
      <hr className="my-8 border-gray-600 w-full" />
      
      <h1 className="text-white text-2xl font-montserrat text-center">
        SOME BRANDS I&apos;VE WORKED WITH.
      </h1>
     
      <div className="relative lg:w-full sm:w-screen lg:mt-8 sm:mt-10 overflow-hidden">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["100%", "-100%"] }} 
          transition={{
            repeat: Infinity, 
            duration: 10,
            ease: "linear", 
          }}
        >
          <div className="flex gap-4 lg:gap-8 shrink-0">
          <MorningFreshIcon />
          <WPXIcon />
          <ShinguarsIcon />
          <AccessBankIcon />
          <KerryGoldIcon />
          <BandGIcon />
          <PNXIcon />
          <PremierCoolIcon />
          <OlogeIcon />
          <KleenUpIcon />
          <TitilopeIcon />
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Page;
