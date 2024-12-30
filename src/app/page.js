import React from 'react'
import Sidebar from './components/Sidebar';

const page = () => {
  return (
    <main className="min-h-screen bg-black p-6 lg:p-12 flex">
      {/* Sidebar Component */}
      <Sidebar />

      <div className="flex flex-col justify-center max-w-4xl mx-auto ml-4 lg:ml-32 mt-20">
        <h1 className="text-4xl lg:text-6xl text-white mb-4">
          Hello, i&apos;m Qudus Young.
        </h1>
        <p className="text-lg lg:text-xl text-white/80 font-mono">
          A product designer focused on creating meaningful experiences through design.
        </p>
        <div className="">
        <button className="mt-8 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors w-auto">
          Resume
        </button>
        </div>
        {/* <SocialLinks /> */}
      </div>
    </main>
  );
};

export default page;
