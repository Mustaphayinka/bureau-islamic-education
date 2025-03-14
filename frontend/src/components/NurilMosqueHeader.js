import React from 'react';
import { Link } from 'react-router-dom';
import bfielogo from '../assets/bfielogo.jpeg';


const NurilMosqueHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          <img src={bfielogo} alt="Logo" className="h-8" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Nuril Islam School</h1>
        </div>
        <nav className="flex flex-wrap space-x-2 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Home</Link>
          <Link to="/ikoyi-central-mosque" className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-gray-100">Ikoyi Central Mosque</Link>
        </nav>
      </div>
    </header>
  );
};

export default NurilMosqueHeader;
