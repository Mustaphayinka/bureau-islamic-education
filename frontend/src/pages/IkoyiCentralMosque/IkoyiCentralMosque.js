import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/bfie1.jpeg';

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
            {/* <a href="/" className="text-gray-800 hover:text-blue-500">Home</a>
            <a href="/about" className="text-gray-800 hover:text-blue-500">About</a>
            <a href="/services" className="text-gray-800 hover:text-blue-500">Services</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-500">Contact</a> */}
          </nav>
        </div>
      </header>

      <main>
        <section
          className="w-screen h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="text-center bg-black bg-opacity-50 px-4 py-2 rounded">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Welcome to Ikoyi Central Mosque</h2>
            <div className="mt-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
              <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                Home
              </Link>
              <Link to="/nuril-islam-school" className="bg-white text-green-500 px-6 py-2 rounded-full hover:bg-gray-100">
                Nuril Islam School
              </Link>
            </div>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 text-center bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Events and Announcements</h2>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Stay tuned for upcoming events and important announcements related to the Ikoyi Central Mosque.
            </p>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Words of Wisdom</h2>
            <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
              "The best among you are those who have the best manners and character." - Prophet Muhammad (PBUH)
            </p>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Services Offered</h2>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Ikoyi Central Mosque caters for the needs of the Muslims in and around Ikoyi – Lagos; their need for daily congregational prayers, Jummat prayer, Eid prayers, funeral services, daily Ta'alim/preaching, Nikkah & marriage counselling, alternative dispute resolution, collection & disbursement of Zakkat, Da'awa & outreach programs among others. Headed by the Chief Imam, the Ikoyi Central Mosque is being micro-managed by the Shuura/Ulama committee.
            </p>
          </div>
        </section>

        <section className="w-screen py-10 md:py-20 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12">Contact Information</h2>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-1/3">
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-700 mt-2">+2347049216166 (Whatsapp/calls)</p>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-lg font-semibold">Write Us</h3>
                  <p className="text-gray-700 mt-2">bureauforislamiceducation@gmail.com</p>
                  <p className="text-gray-700 mt-2">ikoyicentralmosque@gmail.com</p>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-lg font-semibold">Follow Us</h3>
                  <div className="flex mt-2 space-x-4">
                    <a href="https://www.facebook.com/bfieikoyilagos?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <i className="fab fa-facebook fa-2x" style={{ color: '#1877F2' }}></i>
                    </a>
                    <a href="https://twitter.com/bfieikoyilagos" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <i className="fab fa-twitter fa-2x" style={{ color: '#1DA1F2' }}></i>
                    </a>
                    <a href="https://t.me/bfieikoyilagos" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <i className="fab fa-telegram fa-2x" style={{ color: '#0088CC' }}></i>
                    </a>
                    <a href="https://instagram.com/bfieikoyilagos" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <i className="fab fa-instagram fa-2x" style={{ color: '#C13584' }}></i>
                    </a>
                    <a href="https://www.youtube.com/@Bfieikoyilagos" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <i className="fab fa-youtube fa-2x" style={{ color: '#FF0000' }}></i>
                    </a>
                    <a href="https://www.tiktok.com/@bfieikoyilagos" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <i className="fab fa-tiktok fa-2x" style={{ color: '#000000' }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/bureau-for-islamic-education-70213628b?trk=contact-info" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <i className="fab fa-linkedin fa-2x" style={{ color: '#0077B5' }}></i>
                    </a>
                    <a href="http://www.bfie.aaic.org.ng" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      <i className="fas fa-globe fa-2x" style={{ color: '#17A2B8' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-screen bg-gray-800 text-white py-8">
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

export default IkoyiCentralMosque;
