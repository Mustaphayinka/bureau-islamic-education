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
                  <p className="text-gray-700"> Teaching and propagating the basics and truth of the Islamic Religion </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                  <i className="fas fa-flag fa-2x"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Our Mission</h3>
                  <p className="text-gray-700">Harness resources ( Human, Financial, Materials etc) to teach and propagate Islam as well as to encourage non Muslims to see Islam as it is not necessary through the action or inaction of Muslims.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
