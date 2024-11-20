import React from 'react';
import TypewriterEffect from '../ui/text-generate-effect';

const words = [
  { text: "Your " },
  { text: "JEWELLERY"},
  { text: "Store." },
];

const Head = () => {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-600 to-orange-400"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-gray-800/10 to-black/20 animate-gradient-xy"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/30 rounded-full blur-[80px]"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/30 to-purple-600/30 rounded-full blur-[100px]"></div>

   
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            360° Software Solutions for
          </h1>
          <h1 className='text-black'><TypewriterEffect words={words} /></h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-200 leading-relaxed">
            Take Your Jewellery Store to the Next Level with AURUMM - The Ultimate Software Suite
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold 
              hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl
              backdrop-blur-sm">
              Schedule A Demo
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
