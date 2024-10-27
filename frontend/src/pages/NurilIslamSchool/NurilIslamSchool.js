import React from 'react';
import { Link } from 'react-router-dom';
import bfielogo from '../../assets/bfielogo.jpeg';
import image from '../../assets/bfie1.jpeg';

// Mosque Header Component
const MosqueHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          <img src={bfielogo} alt="Logo" className="h-8" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Nuril Islam School</h1>
        </div>
        <nav className="flex flex-wrap space-x-2 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Home</Link>
          <Link to="/ikoyi-central-mosque" className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-gray-100">Ikoyi Central Mosque</Link>
        </nav>
      </div>
    </header>
  );
};

// Welcome Section Component
const WelcomeSection = () => {
  return (
    <section
      className="w-screen h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-center bg-black bg-opacity-50 px-4 py-2 rounded">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Nuril Islam School</h2>
      </div>
    </section>
  );
};

// School Sections Component with Grid Layout
const SchoolSections = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">School Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Children & Adolescent Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-8 border-green-500 h-full">
            <h3 className="text-2xl font-semibold text-gray-800">Children & Adolescent</h3>
            <p className="text-gray-500 mb-4">Sat & Sun (8:30AM - After Asr Prayer)</p>
            <ul className="list-disc ml-4 text-gray-700 space-y-1">
              <li>Preparatory: Tahfeez, Huruf, Arabic, Azkaar & Numeracy</li>
              <li>Nursery 1: Tahfeez, Huruf, Arabic Sentence, Azkaar & Numeracy</li>
              <li>Nursery 2: Tahfeez, Huruf, Arabic Sentence, Azkaar & Numeracy</li>
              <li>Class 1: Tahfeez, Tarteel, Islamic Studies, Arabic Conversation & Huruf</li>
              <li>Class 2: Tahfeez, Tarteel, Islamic Studies, Arabic Conversation & Tawheed</li>
              <li>Class 3: Tahfeez, Tarteel & Tajwid, Islamic Studies, Arabic Conversation & Tawheed</li>
              <li>Class 4: Tahfeez, Tarteel & Tajwid, Islamic Studies, Arabic Conversation & At-Tahlil Al-Arabiy</li>
              <li>Class 5: Tahfeez, Tarteel, Arabic Conversation, At-Tahlil Al-Arabiy & At-Tahlil As-Shar'i</li>
            </ul>
          </div>

          {/* Tahfiz (Boarding) Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-8 border-blue-500 h-full">
            <h3 className="text-2xl font-semibold text-gray-800">Tahfiz (Boarding)</h3>
            <ul className="list-disc ml-4 mt-4 text-gray-700 space-y-1">
              <li>Al-Qur’an</li>
              <li>At-Tawheed</li>
              <li>Ad-Diraasaatul Islaamiyah</li>
              <li>At-Tajweed</li>
              <li>Al-Arabiyyah</li>
              <li>Mathematics</li>
              <li>English Studies</li>
              <li>Basic Science and Technology (BST)</li>
            </ul>
          </div>

          {/* Adult (Men) Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-8 border-yellow-500 h-full">
            <h3 className="text-2xl font-semibold text-gray-800">Adult (Men)</h3>
            <p className="text-gray-500 mb-4">Sat & Sun (After Maghrib - Ishaa)</p>
            <ul className="list-disc ml-4 text-gray-700 space-y-1">
              <li>Al-Qur’an</li>
              <li>Ad-Diraasaatul Islaamiyah</li>
              <li>At-Tajweed</li>
              <li>Al-Arabiyyah</li>
            </ul>
          </div>

          {/* Adult (Women) Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-8 border-pink-500 h-full">
            <h3 className="text-2xl font-semibold text-gray-800">Adult (Women)</h3>
            <p className="text-gray-500 mb-4">Mon-Wed 10:00AM-12:30PM</p>
            <ul className="list-disc ml-4 text-gray-700 space-y-1">
              <li>Al-Qur’an</li>
              <li>Ad-Diraasaatul Islaamiyah</li>
              <li>At-Tajweed</li>
              <li>Al-Arabiyyah</li>
              <li>As-Seerah</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Adhikrah Section Component
const AdhikrahSection = () => {
  return (
    <section className="py-10 md:py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">Adhikrah Da’wah Program</h2>
        <p className="text-lg text-gray-700 mb-4">
          Adhikrah is a multifaceted da’wah initiative embodying teachings in Fiqh (Islamic Jurisprudence), Aadaab (Islamic Moral Etiquettes), Thaqaafaat (Islamic Civilization), and Aqeedah (Islamic Creed). It provides a rich and balanced educational experience with a holistic approach to spiritual growth and development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-500">Aims</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-2">
              <li>Promote a comprehensive understanding of Islamic teachings through lessons in Fiqh, Aadaab, Thaqaafaat, and Aqeedah.</li>
              <li>Foster moral and ethical values in the community by emphasizing Islamic manners and etiquettes.</li>
              <li>Strengthen spiritual and religious knowledge through key concepts of Aqeedah and related Islamic rituals.</li>
              <li>Build a knowledgeable and practicing Muslim community by providing accessible Islamic education.</li>
              <li>Create a platform for continuous learning and discussion on Islamic jurisprudence and culture.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-500">Objectives</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-2">
              <li>Organize weekly or bi-weekly lessons focused on Fiqh to enhance understanding of religious obligations.</li>
              <li>Instill good character and conduct in daily life.</li>
              <li>Offer lessons on Thaqaafaat to connect individuals with Islamic civilization and values.</li>
              <li>Provide in-depth teachings on Aqeedah, explaining its significance and proper observance.</li>
              <li>Engage scholars to lead discussions and answer questions on Islamic teachings and practices.</li>
              <li>Facilitate community bonding and outreach through educational events and workshops.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Home Component with Adhikrah Section
const Home = () => {
  return (
    <div>
      <MosqueHeader />
      <WelcomeSection />
      <SchoolSections />
      <AdhikrahSection />
      {/* <CurriculumSection />
      <AdmissionSection />
      <FacultySection />
      <AnnouncementsSection />
      <ContactSection /> */}
    </div>
  );
};

export default Home;
