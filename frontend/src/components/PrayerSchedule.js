import React, { useState, useEffect, useCallback } from 'react';
import image5 from '../assets/bfie5.jpeg'; // Adjust the path as needed
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import moment from 'moment-hijri';

const PrayerSchedule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dayAdjustment] = useState(0); // This can be adjusted manually

  const prayers = [
    { time: '6:10 am', name: 'Fajr', label: 'Dawn' },
    { time: '1:10 PM', name: 'zhur', label: 'Sunrise' },
    { time: '4:25 PM', name: 'Asri', label: 'Afternoon' },
    { time: '6:55 PM', name: 'Maghrib', label: 'Sunset' },
    { time: '8:30 PM', name: 'Isha', label: 'Night' },
  ];

  const gregorianDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const islamicDate = moment().add(dayAdjustment, 'days').format('iD iMMMM iYYYY') + ' AH';

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === prayers.length - 1 ? 0 : prevIndex + 1));
  }, [prayers.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prayers.length - 1 : prevIndex - 1));
  }, [prayers.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image5})` }}
    >
      <div className="container mx-auto text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-white animate-fade-in">
          PRAYER TIME SCHEDULE AT IKOYI CENTRAL MOSQUE
        </h2>

        <div className="mb-4 text-lg md:text-xl font-semibold animate-slide-in">
          <p className="text-green-400">{islamicDate}</p>
          <p className="text-yellow-400">{gregorianDate}</p>
        </div>

        <div className="relative w-full max-w-xl mx-auto">
          <div className="scroll-container flex whitespace-nowrap justify-center">
            <div className="scroll-item p-4 min-w-full">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md animate-zoom-in">
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

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideIn {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes zoomIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-in-out;
        }

        .animate-slide-in {
          animation: slideIn 2s ease-in-out;
        }

        .animate-zoom-in {
          animation: zoomIn 1.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default PrayerSchedule;
