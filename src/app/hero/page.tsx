import React from 'react';
//import Image from 'next/image'; 
//import ssky from '../assets/ssky.jpg'; 

const Hero = () => {
  return (
    <div className="hero min-h-screen relative">
      {/* Use Next.js Image for the background */}
     {/* <Image
        src=""
        alt="Starry Sky Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="absolute inset-0 z-0"
      /> */}
      {/* Darker overlay */}
     {/*  <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="hero-content text-neutral-content relative z-10 pt-20 flex justify-center items-center text-center">
        <div className="max-w-2xl px-6">
          <h1 className="mb-5 text-6xl pt-20 md:text-7xl font-bold leading-snug tracking-tight text-white">
            Unlock Your <span className="text-primary">Potential</span>  
          </h1>
          <p className="mb-8 text-lg md:text-2xl text-gray-200">
            Where vision meets innovation, and ideas transform into groundbreaking realities.
          </p>
          <button className="btn btn-outline btn-primary text-lg md:text-xl px-10 py-4 transition-transform transform hover:scale-110">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
