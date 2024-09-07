import React from 'react';
import image1 from '../assets/bfie1.jpeg'; // Adjust the path as needed

const AboutSection = () => {
  return (
    <section className="w-screen py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div className="w-full md:w-1/2 p-4">
            <img src={image1} alt="About" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 p-4 text-left md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">In The Name Of Allah The Beneficent The Merciful</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              The Bureau for Islamic Education is a socio-religious and benevolent organization with the fundamental objective of promoting and propagating the true teachings of Islam by educating/enlightening Muslims and fostering friendship, cooperation, and understanding among Muslims and between Muslims and adherents of other faiths.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                  <i className="fas fa-eye fa-2x"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Our Vision</h3>
                  <p className="text-gray-700">Teaching and propagating the basics and truth of the Islamic Religion.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                  <i className="fas fa-flag fa-2x"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Our Mission</h3>
                  <p className="text-gray-700">Harness resources (Human, Financial, Materials, etc.) to teach and propagate Islam and encourage non-Muslims to see Islam as it is, not necessarily through the action or inaction of Muslims.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Objectives Section */}
        <div className="mt-10">
          <h3 className="text-xl md:text-3xl font-bold mb-6 text-green-600">Strategic Objectives</h3>
          <ul className="list-disc list-inside text-base md:text-lg leading-relaxed text-gray-700 space-y-4">
            <li>To educate and enlighten Muslims in Nigeria and around the world by propagating and spreading the true teachings of Islam as it is in the holy Qur'an and Sunnah of Prophet Muhammad SAW.</li>
            <li>Promote friendship and cooperation between and among Muslims by providing a forum (Lectures, Seminars, Workshops, Conferences, etc.) for unity, understanding, exchange of views, and dissemination of Islamic knowledge among Muslims and, where necessary, between Muslims and other faiths.</li>
            <li>Establishment of Islamic Centres (Schools, Libraries, and Mosques), Radio/TV stations, Hospitals/Clinics, and other facilities that will enhance the welfare of Muslims and the propagation of the Islamic Religion.</li>
            <li>Work in partnership with similar organizations (Local and International) as well as Muslim countries to uplift Islam and Muslims in Nigeria and around the world.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
