import React from 'react';
import bfielogo from '../assets/bfielogo.jpeg'; // This can be your logo image

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          {/* Placeholder for your logo */}
          <img src={bfielogo} alt="Logo" className="h-8" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Bureau for Islamic Education</h1>
        </div>
        <nav className="flex flex-wrap space-x-2 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          {/* Add your navigation links here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
