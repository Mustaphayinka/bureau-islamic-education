import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/bfie1.jpeg';
import MosqueWelcomeSection from '../../components/MosqueWelcomeSection';
import EventsAndAnnouncements from '../../components/EventsAndAnnouncements';
import WordsOfWisdom from '../../components/WordsOfWisdom';
import ServicesOffered from '../../components/ServicesOffered';
import ContactInformation from '../../components/ContactInformation';

const IkoyiCentralMosque = () => {
  return (
    <div>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-4">
            <img src={image1} alt="Logo" className="h-8" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Ikoyi Central Mosque</h1>
          </div>
          <nav className="flex flex-wrap space-x-2 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
            <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
              Home
            </Link>
            <Link to="/nuril-islam-school" className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-gray-100">
              Nuril Islam School
            </Link>
          </nav>
        </div>
      </header>
      <main>

        <MosqueWelcomeSection />

        <EventsAndAnnouncements />

        <WordsOfWisdom />

        <ServicesOffered />
        <ContactInformation />
      </main>

      <footer className="w-screen bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Bureau for Islamic Education. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IkoyiCentralMosque;
