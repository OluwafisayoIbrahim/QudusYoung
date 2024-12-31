"use client"
import React from 'react'
import Sidebar from './components/Sidebar';
import SocialLinks from './components/SocialLinks';
import Link from 'next/link';
import Typewriter from './assets/Typewriter';

const page = () => {
  return (
    <main className="min-h-screen bg-black p-6 lg:p-12 flex"  id="#home">
      {/* Sidebar Component */}
      <Sidebar />

      <div className="flex flex-col justify-center max-w-4xl mx-auto ml-4 lg:ml-32 mt-20">
        <h1 className="text-4xl lg:text-6xl text-white mb-4 space-y-4">
        <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello! {" "}
          </span>
          <br />
          <div className="w-full overflow-hidden">
            <Typewriter />
          </div>
        </h1>
        <div className="flex items-center mt-8 space-x-4">
        <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors w-auto">
          <Link href={"https://omotundeyoungqudus.tiiny.site/"}>
          Resume
          </Link>
        </button>
        <SocialLinks />
        </div>
      </div>
    </main>
  );
};

export default page;
