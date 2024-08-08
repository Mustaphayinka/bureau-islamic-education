import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/bfie1.jpeg';
import ApprovedDocuments from '../../components/ApprovedDocuments';

const Home = () => {
  useEffect(() => {
    const container = document.getElementById('scroll-container');
    if (container) {
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
    }
  }, []);

  return (
    <div>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-4">
            <img src={image1} alt="Logo" className="h-8" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Bureau for Islamic Education</h1>
          </div>
          <nav className="flex flex-wrap space-x-2 md:space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
            {/* Add your navigation links here */}
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
              <Link to="/ikoyi-central-mosque" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                Ikoyi Central Mosque
              </Link>
              <Link to="/nuril-islam-school" className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-gray-100">
                Nuril Islam School
              </Link>
            </div>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Brief History</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-4">
                <img src={image1} alt="History" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <p className="text-base md:text-lg leading-relaxed text-left">
                  The concept of the BUREAU FOR ISLAMIC EDUCATION started as a school for Islamic Education (Madarasatul Nuril Islam Society) targeted to educate women living in Ikoyi and its environs in 1983 at No. 2 Glover Road, Ikoyi, Lagos. The Bureau for Islamic Education was duly registered at the Corporate Affairs Commission on the 21st November 1991 with a Certificate of Registration No. 6487 and a NINE (9) Member Board of Trustees. Before the death of Alhaji Abdulkadir Ahmed in 1993, he declared and dedicated the property at No. 17 Ruxton Road Ikoyi Lagos as WAQAF bequeathed to the Muslim Ummah.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center">
              <div className="w-full md:w-1/2 p-4">
                <img src={image1} alt="Video Placeholder" className="w-full h-auto rounded-lg shadow-md" />
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
                      <p className="text-gray-700">The Bureau for Islamic Education is a socio-religious and benevolent organization with the fundamental objective of promoting and propagating the true teachings of Islam by educating/enlightening Muslims and fostering friendship, cooperation, and understanding among Muslims and between Muslims and adherents of other faiths.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                      <i className="fas fa-flag fa-2x"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Our Mission</h3>
                      <p className="text-gray-700">Our objectives are achieved through the establishment of schools, building of mosques, social rehabilitation, and empowerment of vulnerable individuals, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Prayer Schedule</h2>
            <div id="scroll-container" className="flex space-x-4 overflow-x-auto">
              <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Dawn Prayer</h3>
                  <p className="text-2xl text-green-500 font-semibold">Fajr</p>
                  <p className="text-lg text-gray-700">5:29 am</p>
                </div>
              </div>
              <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Sunrise Time</h3>
                  <p className="text-2xl text-green-500 font-semibold">Duhur</p>
                  <p className="text-lg text-gray-700">12:52 PM</p>
                </div>
              </div>
              <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Afternoon</h3>
                  <p className="text-2xl text-green-500 font-semibold">Asar</p>
                  <p className="text-lg text-gray-700">4:10 PM</p>
                </div>
              </div>
              <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Sunset Prayer</h3>
                  <p className="text-2xl text-green-500 font-semibold">Maghrib</p>
                  <p className="text-lg text-gray-700">9:03 PM</p>
                </div>
              </div>
              <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Night Prayer</h3>
                  <p className="text-2xl text-green-500 font-semibold">Isha</p>
                  <p className="text-lg text-gray-700">8:11 PM</p>
                </div>
              </div>
              <div className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Sunrise</h3>
                  <p className="text-2xl text-green-500 font-semibold">Shuruq</p>
                  <p className="text-lg text-gray-700">2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ApprovedDocuments />

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
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Donations and Support</h2>
            <p className="mt-4 text-base md:text-lg font-semibold mb-6">All Accounts Name: Bureau for Islamic Education</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-cog fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Maintenance & Operations</h3>
                </div>
                <p className="text-gray-700">Union Bank: 0006648320</p>
                <p className="text-gray-700">Lotus Bank: 1003580434</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-project-diagram fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Projects</h3>
                </div>
                <p className="text-gray-700">Union Bank: 0037173446</p>
                <p className="text-gray-700">Lotus Bank: 1003580355</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-moon fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Ramadan Programs / Special Purposes</h3>
                </div>
                <p className="text-gray-700">Lotus Bank: 1003580513</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-graduation-cap fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Scholarship</h3>
                </div>
                <p className="text-gray-700">Lotus Bank: 1003580719</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-hand-holding-heart fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Zakkat / Zakkat-ul-Fitr</h3>
                </div>
                <p className="text-gray-700">Lotus Bank: 1003580661</p>
                <p className="text-gray-700">Union Bank: 0193836571</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
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

export default Home;
