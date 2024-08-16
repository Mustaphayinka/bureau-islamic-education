import React, { useState, useEffect, useCallback } from 'react';
import image5 from '../assets/bfie5.jpeg'; // Adjust the path as needed
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing icons for arrows

const PrayerSchedule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prayers = [
    { time: '5:29 am', name: 'Fajr', label: 'Dawn' },
    { time: '12:52 PM', name: 'Duhur', label: 'Sunrise' },
    { time: '4:10 PM', name: 'Asar', label: 'Afternoon' },
    { time: '9:03 PM', name: 'Maghrib', label: 'Sunset' },
    { time: '8:11 PM', name: 'Isha', label: 'Night' },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === prayers.length - 1 ? 0 : prevIndex + 1));
  }, [prayers.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prayers.length - 1 : prevIndex - 1));
  }, [prayers.length]);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [nextSlide]); // Include nextSlide in dependency array

  return (
    <section
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image5})` }}
    >
      <div className="container mx-auto text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-white">
          PRAYER TIME SCHEDULE AT IKOYI CENTRAL MOSQUE
        </h2>
        <div className="relative w-full max-w-xl mx-auto">
          <div className="scroll-container flex whitespace-nowrap">
            <div className="scroll-item p-4 min-w-full">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{prayers[currentIndex].label}</h3>
                <p className="text-2xl text-green-500 font-semibold">{prayers[currentIndex].name}</p>
                <p className="text-lg text-gray-700">{prayers[currentIndex].time}</p>
              </div>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrayerSchedule;
