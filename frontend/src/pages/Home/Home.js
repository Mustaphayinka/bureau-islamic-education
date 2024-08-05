import React from 'react';
import image1 from '../../assets/bfie1.jpeg';
import ApprovedDocuments from '../../components/ApprovedDocuments';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-800 text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">Bureau for Islamic Education</h1>
          <p className="mt-2 text-lg">Empowering through knowledge and faith</p>
        </div>
      </header>

      <main className="py-10">
        <section
          className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded">
            Welcome to Bureau for Islamic Education
          </h2>
        </section>

        <section className="w-screen py-20">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-12">Brief History</h2>
            <p className="text-lg leading-relaxed">
              The concept of the BUREAU FOR ISLAMIC EDUCATION started as a school for Islamic Education (Madarasatul Nuril Islam Society) targeted to educate women living in Ikoyi and its environs in 1983 at No. 2 Glover Road, Ikoyi, Lagos. The Bureau for Islamic Education was duly registered at the Corporate Affairs Commission on the 21st November 1991 with a Certificate of Registration No. 6487 and a NINE (9) Member Board of Trustees. Before the death of Alhaji Abdulkadir Ahmed in 1993, he declared and dedicated the property at No. 17 Ruxton Road Ikoyi Lagos as WAQAF bequeathed to the Muslim Ummah.
            </p>
          </div>
        </section>

        <ApprovedDocuments />

        <section className="w-screen py-20 bg-gray-200">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-8">Vision, Mission, and Strategic Objectives</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              The Bureau for Islamic Education is a socio-religious and benevolent organization with the fundamental objective of promoting and propagating the true teachings of Islam by educating/enlightening Muslims and fostering friendship, cooperation, and understanding among Muslims and between Muslims and adherents of other faiths. These objectives are achieved through the establishment of schools, building of mosques, social rehabilitation, and empowerment of vulnerable individuals, and more.
            </p>
          </div>
        </section>

        <section className="w-screen py-20 bg-blue-100 rounded-lg">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-12">Donations and Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Maintenance & Operations</h3>
                  <p>Union Bank: 0006648320</p>
                  <p>Lotus Bank: 1003580434</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Projects</h3>
                  <p>Union Bank: 0037173446</p>
                  <p>Lotus Bank: 1003580355</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ramadan Programs / Special Purposes</h3>
                  <p>Lotus Bank: 1003580513</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Scholarship</h3>
                  <p>Lotus Bank: 1003580719</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Zakkat / Zakkat-ul-Fitr</h3>
                  <p>Lotus Bank: 1003580661</p>
                  <p>Union Bank: 0193836571</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold">All Accounts Name: Bureau for Islamic Education</p>
          </div>
        </section>
      </main>

      <footer className="w-screen bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Bureau for Islamic Education. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
