import React from 'react';

const NurilSchoolSections = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">School Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Children & Adolescent Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 flex flex-col h-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Children & Adolescent</h3>
            <p className="text-gray-500 mb-4">Sat & Sun (8:30AM - After Asr Prayer)</p>
            <ul className="list-disc ml-4 text-gray-700 space-y-2">
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
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 flex flex-col h-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tahfiz (Boarding)</h3>
            <ul className="list-disc ml-4 text-gray-700 space-y-2 mt-2">
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
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500 flex flex-col h-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Adult (Men)</h3>
            <p className="text-gray-500 mb-4">Sat & Sun (After Maghrib - Ishaa)</p>
            <ul className="list-disc ml-4 text-gray-700 space-y-2">
              <li>Al-Qur’an</li>
              <li>Ad-Diraasaatul Islaamiyah</li>
              <li>At-Tajweed</li>
              <li>Al-Arabiyyah</li>
            </ul>
          </div>

          {/* Adult (Women) Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500 flex flex-col h-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Adult (Women)</h3>
            <p className="text-gray-500 mb-4">Mon-Wed 10:00AM-12:30PM</p>
            <ul className="list-disc ml-4 text-gray-700 space-y-2">
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

export default NurilSchoolSections;
