import React from 'react';
import image6 from '../assets/bfie6.jpeg'; // Adjust the path as needed

const DonationsSupport = () => {
  return (
    <section className="w-screen py-10 md:py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Donations and Support</h2>
        <p className="mt-4 text-base md:text-lg font-semibold mb-6">All Accounts Name: Bureau for Islamic Education</p>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <img src={image6} alt="Donations and Support" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="grid grid-cols-1 gap-4" style={{ height: '100%' }}>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-cog fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Maintenance & Operations</h3>
                </div>
                <p className="text-gray-700">Union Bank: 0006648320</p>
                <p className="text-gray-700">Lotus Bank: 1003580434</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-project-diagram fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Projects</h3>
                </div>
                <p className="text-gray-700">Union Bank: 0037173446</p>
                <p className="text-gray-700">Lotus Bank: 1003580355</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-moon fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Ramadan Programs / Special Purposes</h3>
                </div>
                <p className="text-gray-700">Lotus Bank: 1003580513</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-graduation-cap fa-2x"></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Scholarship</h3>
                </div>
                <p className="text-gray-700">Lotus Bank: 1003580719</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default DonationsSupport;
