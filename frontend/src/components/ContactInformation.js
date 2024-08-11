import React from 'react';

const ContactInformation = () => {
  return (
    <section className="w-screen py-10 md:py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Contact Information</h2>
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
            <div className="w-full md:w-1/3 flex items-start">
              <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                <i className="fas fa-phone-alt fa-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-gray-700 mt-2 text-sm md:text-base">+2347049216166 (Whatsapp/calls)</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex items-start">
              <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                <i className="fas fa-envelope fa-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Write Us</h3>
                <p className="text-gray-700 mt-2 text-sm md:text-base">bureauforislamiceducation@gmail.com</p>
                <p className="text-gray-700 mt-2 text-sm md:text-base">ikoyicentralmosque@gmail.com</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex items-start">
              <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                <i className="fas fa-share-alt fa-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="flex flex-wrap mt-2 space-x-2 md:space-x-4">
                  <a href="https://www.facebook.com/bfieikoyilagos?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-lg" style={{ color: '#1877F2' }}></i>
                  </a>
                  <a href="https://twitter.com/bfieikoyilagos" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#1DA1F2' }}></i>
                  </a>
                  <a href="https://t.me/bfieikoyilagos" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram fa-lg" style={{ color: '#0088CC' }}></i>
                  </a>
                  <a href="https://instagram.com/bfieikoyilagos" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#C13584' }}></i>
                  </a>
                  <a href="https://www.youtube.com/@Bfieikoyilagos" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-lg" style={{ color: '#FF0000' }}></i>
                  </a>
                  <a href="https://www.tiktok.com/@bfieikoyilagos" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok fa-lg" style={{ color: '#000000' }}></i>
                  </a>
                  <a href="https://www.linkedin.com/in/bureau-for-islamic-education-70213628b?trk=contact-info" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-lg" style={{ color: '#0077B5' }}></i>
                  </a>
                  <a href="http://www.bfie.aaic.org.ng" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-globe fa-lg" style={{ color: '#17A2B8' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
