import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MusicApp</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-yellow-400">Home</a></li>
          <li><a href="/tracks" className="hover:text-yellow-400">Tracks</a></li>
          <li><a href="/artists" className="hover:text-yellow-400">Artists</a></li>
          <li><a href="/profile" className="hover:text-yellow-400">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
}
