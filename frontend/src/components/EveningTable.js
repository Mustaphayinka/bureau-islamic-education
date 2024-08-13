import React from 'react';
import image11 from '../assets/bfie11.jpeg'; // Adjust the path as needed

const EveningTable = () => {
  const timetable = [
    { day: 'Tuesdays', topic: 'Stories Of The Sahabas' },
    { day: 'Wednesday', topic: 'Stories of The Prophets of Allah' },
    { day: 'Friday', topic: 'At-Tawheed' },
    { day: 'Saturday', topic: 'Explanation of The Prophet\'s Prayer' },
    { day: 'Sunday', topic: 'Riyadhus-Saliheen' },
  ];

  return (
    <section className="w-screen py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-stretch">
          <div className="md:w-1/2 p-4 flex">
            <img src={image11} alt="Evening Ta'alim" className="rounded-lg shadow-md w-full object-cover" style={{ maxHeight: '100%' }} />
          </div>
          <div className="md:w-1/2 p-4 bg-white rounded-lg shadow-md flex items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600">Evening Ta'alim Timetable</h3>
              <ul className="text-left space-y-4">
                {timetable.map((item, index) => (
                  <li key={index} className="mb-4">
                    <span className="font-semibold">{item.day}:</span> {item.topic} <br />
                    <span className="text-sm text-green-500">Between Maghrib and Isha</span> {/* Changed color */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveningTable;
