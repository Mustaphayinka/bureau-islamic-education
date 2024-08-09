import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import image3 from '../assets/bfie3.jpeg'; // Adjust the path as needed
import image4 from '../assets/bfie4.jpeg'; // Adjust the path as needed
import image10 from '../assets/bfie10.jpeg'; // Adjust the path as needed

const images = [image4, image3, image10];

const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-screen h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="text-center bg-black bg-opacity-50 px-4 py-2 rounded">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Welcome to Bureau for Islamic Education</h2>
        <p className="text-sm md:text-lg text-white mt-2">Empowering through knowledge and faith</p>
        <div className="mt-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
          <Link to="/ikoyi-central-mosque" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
            Ikoyi Central Mosque
          </Link>
          <Link to="/nuril-islam-school" className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-gray-100">
            Nuril Islam School
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
