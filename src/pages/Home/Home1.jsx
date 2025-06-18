import React from 'react';
import image1 from '../../assets/image1.jpg';

const HeroOne = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-xl">
          Discover the Soundtrack to Your Life
        </h1>
        <p className="mt-4 max-w-xl text-lg md:text-xl drop-shadow">
          Explore curated playlists, trending tracks, and live sessions from artists around the world.
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition shadow-lg">
          Listen Now
        </button>
      </div>
    </div>
  );
};

export default HeroOne;
