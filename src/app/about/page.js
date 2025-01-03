"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

const experiences = [
  {
    company: "Titilope Adeniyi",
    role: "Social Media/Community Manager",
    timeframe: "August 2024 – Present",
  },
  {
    company: "The Shinguards – Online Football Community",
    role: "Digital Strategist",
    timeframe: "July 2024 – Present",
  },
  {
    company: "KleenUp Cosmetics",
    role: "Product Marketing Consultant",
    timeframe: "Jan 2023 – May 2023",
  },
  {
    company: "Wildreams Agency – Lagos, Nigeria",
    role: "Communications Engagement Associate",
    timeframe: "Nov 2021 – Aug 2023",
  },
  {
    company: "Rave TV – Lagos, Nigeria",
    role: "Media and Content Development Intern",
    timeframe: "Feb 2019 – Jul 2019",
  },
  {
    company: "Mars Photography",
    role: "Freelance Photographer",
    timeframe:  "Mar 2018 – Present",
  }
];

const About = () => {
  const [isImageOne, setIsImageOne] = useState(true);

  // Memoize the toggleImage function with useCallback
  const toggleImage = useCallback(() => {
    setIsImageOne((prev) => !prev);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      toggleImage();
    }, 4000);
    return () => clearInterval(interval);
  }, [toggleImage]);

  // Animation variants for Framer Motion
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="min-h-screen pt-20 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-6 bg-white rounded-lg p-6 h-full min-h-svh shadow-lg">
          <motion.h1
            className="lg:text-4xl sm:text-2xl font-bold text-black"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Qudus: A Paid media specialist
          </motion.h1>
          <motion.div
            className="space-y-6 font-montserrat text-gray-700"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeInVariant}>
            I’m Qudus, a digital strategist and paid media specialist with over three years of experience running ads and creating strategies that actually work. I’ve worked with brands in cosmetics, tech, and fashion, and I’ve learned that great campaigns aren’t just about spending money—they’re about understanding people and what makes them click.
            </motion.p>
            <motion.p variants={fadeInVariant}>
            I specialize in paid media on platforms like Google Ads, Meta Ads, and LinkedIn Ads. My job? To make every naira (or dollar) count. Whether it’s finding the right audience, testing different ideas, or analyzing what’s working and what’s not, I know how to make campaigns perform.
            </motion.p>
            <motion.p variants={fadeInVariant}>
            I’m not all talk either. I’ve helped brands grow by increasing engagement, driving traffic, and boosting revenue. I’ve worked on everything from campaigns that tell stories to strategies that focus purely on results. For me, it’s about finding that balance between creativity and logic—because both matter.
            </motion.p>
            <motion.p variants={fadeInVariant}>
            I’m also the type of person who’s always curious. I’ll spend hours figuring out how to improve an ad or learning something new to help my work. I’m organized, dependable, and I genuinely love what I do. If you’re looking for someone who’s ready to roll up their sleeves and get you result, I’m your guy.
            </motion.p>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div variants={fadeInVariant} className="relative xl:w-full xl:h-full lg:h-full 2xl:h-full sm:w-full sm:h-[300px] rounded-lg overflow-hidden">
          <motion.div className="transition-all duration-200 ease-in-out">
            <Image
              src="/images/Qudus1.jpg"
              alt="Image 1"
              width={1000}
              height={600}
              layout="intrinsic"
              objectFit="cover"
              className={`absolute grayscale top-0 left-0 transition-opacity duration-500 ${isImageOne ? "opacity-100" : "opacity-0"}`}
            />
            <Image
              src="/images/Qudus2.jpg"
              alt="Image 2"
              width={1000}
              height={600}
              layout="intrinsic"
              objectFit="cover"
              className={`absolute grayscale top-0 left-0 transition-opacity duration-500 ${!isImageOne ? "opacity-100" : "opacity-0"}`}
            />
          </motion.div>
        </motion.div>
      </div>

      <hr className="my-8 border-gray-600" />
      
      {/* Employment Section */}
      <motion.section
        id="experience"
        className="text-white bg-black pb-20"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInVariant} className="px-4 py-8">
          <h1 className="grid grid-cols-3 xl:grid-cols-2 text-3xl font-bold text-white">Employment History</h1>
        </motion.div>

        <div className="space-y-8 px-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-black shadow-md rounded-lg p-4"
              variants={fadeInVariant}
            >
              <div className="text-lg font-semibold text-white">{experience.company}</div>
              {experience.role && <div className="text-sm text-gray-500">{experience.role}</div>}
              <div className="text-sm text-gray-400">{experience.timeframe}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default About;
