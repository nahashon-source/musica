import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">MyWebsite</Link>

      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800"
        >
          Home Pages
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            <Link to="/home1" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Home 1</Link>
            <Link to="/home2" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Home 2</Link>
            <Link to="/home3" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Home 3</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
