import React, { useEffect } from 'react';
import image5 from '../assets/bfie5.jpeg'; // Adjust the path as needed

const PrayerSchedule = () => {
  useEffect(() => {
    const container = document.getElementById('scroll-container');
    if (container) {
      const content = container.innerHTML;
      container.innerHTML += content; // Duplicate the content

      const scrollWidth = container.scrollWidth / 2;
      let scrollPos = 0;

      const scrollContent = () => {
        if (scrollPos >= scrollWidth) {
          scrollPos = 0;
        } else {
          scrollPos += 1;
        }
        container.scrollTo({
          left: scrollPos,
          behavior: 'smooth',
        });
      };

      const interval = setInterval(scrollContent, 20);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image5})` }}>
      <div className="container mx-auto text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-white">Prayer Schedule</h2>
        <div id="scroll-container" className="flex space-x-4 overflow-x-auto">
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Dawn</h3>
              <p className="text-2xl text-green-500 font-semibold">Fajr</p>
              <p className="text-lg text-gray-700">5:29 am</p>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Sunrise</h3>
              <p className="text-2xl text-green-500 font-semibold">Duhur</p>
              <p className="text-lg text-gray-700">12:52 PM</p>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Afternoon</h3>
              <p className="text-2xl text-green-500 font-semibold">Asar</p>
              <p className="text-lg text-gray-700">4:10 PM</p>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Sunset</h3>
              <p className="text-2xl text-green-500 font-semibold">Maghrib</p>
              <p className="text-lg text-gray-700">9:03 PM</p>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Night</h3>
              <p className="text-2xl text-green-500 font-semibold">Isha</p>
              <p className="text-lg text-gray-700">8:11 PM</p>
            </div>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Sunrise</h3>
              <p className="text-2xl text-green-500 font-semibold">Shuruq</p>
              <p className="text-lg text-gray-700">2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerSchedule;
