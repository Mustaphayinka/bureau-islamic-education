import React from 'react';
import image1 from '../../assets/bfie1.jpeg';

const IkoyiCentralMosque = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-800 text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">Ikoyi Central Mosque</h1>
          <p className="mt-2 text-lg">Serving the Muslim community in and around Ikoyi, Lagos</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section
          className="py-20 text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white">Welcome to Ikoyi Central Mosque</h2>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-12">Events and Announcements</h2>
            <p className="text-lg leading-relaxed">
              Stay tuned for upcoming events and important announcements related to the Ikoyi Central Mosque.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-12">Words of Wisdom</h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              "The best among you are those who have the best manners and character." - Prophet Muhammad (PBUH)
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-12">Services Offered</h2>
            <p className="text-lg leading-relaxed">
              Ikoyi Central Mosque caters for the needs of the Muslims in and around Ikoyi – Lagos; their need for daily congregational prayers, Jummat prayer, Eid prayers, funeral services, daily Ta'alim/preaching, Nikkah & marriage counselling, alternative dispute resolution, collection & disbursement of Zakkat, Da'awa & outreach programs among others. Headed by the Chief Imam, the Ikoyi Central Mosque is being micro-managed by the Shuura/Ulama committee.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Information</h2>
            <div className="text-center mb-8">
              <p className="text-lg">Phone: <a href="tel:+2347049216166" className="text-blue-600">+2347049216166 (Whatsapp/calls)</a></p>
              <p className="text-lg">Email: <a href="mailto:bureauforislamiceducation@gmail.com" className="text-blue-600">bureauforislamiceducation@gmail.com</a></p>
              <p className="text-lg">Email: <a href="mailto:ikoyicentralmosque@gmail.com" className="text-blue-600">ikoyicentralmosque@gmail.com</a></p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold mb-4">Follow Us</p>
              <div className="flex justify-center flex-wrap space-x-4">
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
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center px-4 md:px-0">
          &copy; 2024 Bureau for Islamic Education. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default IkoyiCentralMosque;
