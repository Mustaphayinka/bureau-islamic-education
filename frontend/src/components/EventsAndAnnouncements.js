import React from 'react';

const EventsAndAnnouncements = () => {
  const timetable = [
    { day: 'Tuesdays', topic: 'Stories Of The Sahabas' },
    { day: 'Wednesday', topic: 'Stories of The Prophets of Allah' },
    { day: 'Friday', topic: 'At-Tawheed' },
    { day: 'Saturday', topic: 'Explanation of The Prophet\'s Prayer' },
    { day: 'Sunday', topic: 'Riyadhus-Saliheen' },
  ];

  return (
    <section className="w-screen py-10 md:py-20 text-center bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Events and Announcements</h2>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Stay tuned for upcoming events and important announcements related to the Ikoyi Central Mosque.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600">Evening Ta'alim Timetable</h3>
          <ul className="text-left">
            {timetable.map((item, index) => (
              <li key={index} className="mb-2">
                <span className="font-semibold">{item.day}:</span> {item.topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventsAndAnnouncements;
