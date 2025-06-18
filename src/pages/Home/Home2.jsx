// src/components/HeroTwo.jsx
import React from 'react';
import image2 from '../../assets/image2.jpg';

const HeroTwo = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/image')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Artists. Vibes. Freedom.
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Join a global community of creators and music lovers. Upload tracks, connect with fans, and amplify your voice.
        </p>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
