import React, { useEffect } from 'react';
import image1 from '../../assets/bfie1.jpeg';
import ApprovedDocuments from '../../components/ApprovedDocuments';

const Home = () => {
  useEffect(() => {
    const container = document.getElementById('scroll-container');
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
  }, []);

  return (
    <div>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-4">
            <img src={image1} alt="Logo" className="h-8" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Bureau for Islamic Education</h1>
          </div>
          <nav className="flex space-x-2 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
            <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">Services</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="w-screen h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="text-center bg-black bg-opacity-50 px-4 py-2 rounded">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Welcome to Bureau for Islamic Education</h2>
            <p className="text-sm md:text-lg text-white mt-2">Empowering through knowledge and faith</p>
            <div className="mt-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Learn More</button>
              <button className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-gray-100">Subscribe</button>
            </div>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 text-center bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Brief History</h2>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              The concept of the BUREAU FOR ISLAMIC EDUCATION started as a school for Islamic Education (Madarasatul Nuril Islam Society) targeted to educate women living in Ikoyi and its environs in 1983 at No. 2 Glover Road, Ikoyi, Lagos. The Bureau for Islamic Education was duly registered at the Corporate Affairs Commission on the 21st November 1991 with a Certificate of Registration No. 6487 and a NINE (9) Member Board of Trustees. Before the death of Alhaji Abdulkadir Ahmed in 1993, he declared and dedicated the property at No. 17 Ruxton Road Ikoyi Lagos as WAQAF bequeathed to the Muslim Ummah.
            </p>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Approved Working Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Bureau Constitution</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">View & Download</button>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Conditions</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">View & Download</button>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Rules and Regulations</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">View & Download</button>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Standards</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">View & Download</button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-gray-200">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Vision, Mission, and Strategic Objectives</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
              The Bureau for Islamic Education is a socio-religious and benevolent organization with the fundamental objective of promoting and propagating the true teachings of Islam by educating/enlightening Muslims and fostering friendship, cooperation, and understanding among Muslims and between Muslims and adherents of other faiths. These objectives are achieved through the establishment of schools, building of mosques, social rehabilitation, and empowerment of vulnerable individuals, and more.
            </p>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Donations and Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Maintenance & Operations</h3>
                <p>Union Bank: 0006648320</p>
                <p>Lotus Bank: 1003580434</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Projects</h3>
                <p>Union Bank: 0037173446</p>
                <p>Lotus Bank: 1003580355</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Ramadan Programs / Special Purposes</h3>
                <p>Lotus Bank: 1003580513</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Scholarship</h3>
                <p>Lotus Bank: 1003580719</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Zakkat / Zakkat-ul-Fitr</h3>
                <p>Lotus Bank: 1003580661</p>
                <p>Union Bank: 0193836571</p>
              </div>
            </div>
            <p className="mt-4 text-base md:text-lg font-semibold">All Accounts Name: Bureau for Islamic Education</p>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Prayer Schedule</h2>
            <div className="relative overflow-hidden">
              <div id="scroll-container" className="flex space-x-8 animate-scroll">
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Fajr</h3>
                  <p className="text-base md:text-lg">5:00 AM</p>
                </div>
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Dhuhr</h3>
                  <p className="text-base md:text-lg">12:30 PM</p>
                </div>
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Asr</h3>
                  <p className="text-base md:text-lg">3:45 PM</p>
                </div>
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Maghrib</h3>
                  <p className="text-base md:text-lg">6:15 PM</p>
                </div>
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Isha</h3>
                  <p className="text-base md:text-lg">7:30 PM</p>
                </div>
                {/* Duplicate for seamless scrolling */}
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Fajr</h3>
                  <p className="text-base md:text-lg">5:00 AM</p>
                </div>
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Dhuhr</h3>
                  <p className="text-base md:text-lg">12:30 PM</p>
                </div>
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Asr</h3>
                  <p className="text-base md:text-lg">3:45 PM</p>
                </div>
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Maghrib</h3>
                  <p className="text-base md:text-lg">6:15 PM</p>
                </div>
                <div className="min-w-max bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl md:text-2xl font-bold">Isha</h3>
                  <p className="text-base md:text-lg">7:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Bureau for Islamic Education. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
