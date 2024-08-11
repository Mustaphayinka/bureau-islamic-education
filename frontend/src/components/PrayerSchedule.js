import React from 'react';
import image5 from '../assets/bfie5.jpeg'; // Adjust the path as needed

const PrayerSchedule = () => {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image5})` }}
    >
      <div className="container mx-auto text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-white">Prayer Schedule</h2>
        <div className="overflow-hidden w-full relative">
          <div
            id="scroll-container"
            className="flex animate-scroll"
          >
            {/* Original content */}
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Dawn</h3>
                <p className="text-2xl text-green-500 font-semibold">Fajr</p>
                <p className="text-lg text-gray-700">5:29 am</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Sunrise</h3>
                <p className="text-2xl text-green-500 font-semibold">Duhur</p>
                <p className="text-lg text-gray-700">12:52 PM</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Afternoon</h3>
                <p className="text-2xl text-green-500 font-semibold">Asar</p>
                <p className="text-lg text-gray-700">4:10 PM</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Sunset</h3>
                <p className="text-2xl text-green-500 font-semibold">Maghrib</p>
                <p className="text-lg text-gray-700">9:03 PM</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Night</h3>
                <p className="text-2xl text-green-500 font-semibold">Isha</p>
                <p className="text-lg text-gray-700">8:11 PM</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Sunrise</h3>
                <p className="text-2xl text-green-500 font-semibold">Shuruq</p>
                <p className="text-lg text-gray-700">2:00 PM</p>
              </div>
            </div>
            {/* Duplicate content for continuous scrolling */}
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Dawn</h3>
                <p className="text-2xl text-green-500 font-semibold">Fajr</p>
                <p className="text-lg text-gray-700">5:29 am</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Sunrise</h3>
                <p className="text-2xl text-green-500 font-semibold">Duhur</p>
                <p className="text-lg text-gray-700">12:52 PM</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Afternoon</h3>
                <p className="text-2xl text-green-500 font-semibold">Asar</p>
                <p className="text-lg text-gray-700">4:10 PM</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Sunset</h3>
                <p className="text-2xl text-green-500 font-semibold">Maghrib</p>
                <p className="text-lg text-gray-700">9:03 PM</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Night</h3>
                <p className="text-2xl text-green-500 font-semibold">Isha</p>
                <p className="text-lg text-gray-700">8:11 PM</p>
              </div>
            </div>
            <div className="scroll-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 inline-block">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Sunrise</h3>
                <p className="text-2xl text-green-500 font-semibold">Shuruq</p>
                <p className="text-lg text-gray-700">2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerSchedule;
