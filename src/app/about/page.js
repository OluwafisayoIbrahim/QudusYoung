"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <main className="min-h-screen pt-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column with white background, rounded corners, and padding */}
        <div className="space-y-6 bg-white rounded-lg p-6 h-full min-h-screen shadow-lg">
          <h1 className="lg:text-4xl sm:text-2xl font-bold text-black">Meet Qudus: A Paid media specialist</h1>
          <div className="space-y-4 font-montserrat text-gray-700">
          <p>
          I’m Qudus, a digital strategist and paid media specialist with over three years of experience running ads and creating strategies that actually work. I’ve worked with brands in cosmetics, tech, and fashion, and I’ve learned that great campaigns aren’t just about spending money—they’re about understanding people and what makes them click.
            </p>
            <p>
            I specialize in paid media on platforms like Google Ads, Meta Ads, and LinkedIn Ads. My job? To make every naira (or dollar) count. Whether it’s finding the right audience, testing different ideas, or analyzing what’s working and what’s not, I know how to make campaigns perform.
            </p>
            <p>
            I’m not all talk either. I’ve helped brands grow by increasing engagement, driving traffic, and boosting revenue. I’ve worked on everything from campaigns that tell stories to strategies that focus purely on results. For me, it’s about finding that balance between creativity and logic—because both matter.
            </p>
            <p>
            I’m also the type of person who’s always curious. I’ll spend hours figuring out how to improve an ad or learning something new to help my work. I’m organized, dependable, and I genuinely love what I do. If you’re looking for someone who’s ready to roll up their sleeves and get you result, I’m your guy.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative xl:w-full xl:h-full sm:w-full sm:h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/images/Portfolio-Desk.jpg" 
            alt="Profile"
            layout="fill"  
            objectFit="cover" 
            className="grayscale"  
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default About;
