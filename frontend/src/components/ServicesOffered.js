import React from 'react';
import image14 from '../assets/bfie14.jpeg'; // Adjust the path as needed

const ServicesOffered = () => {
  return (
    <section className="w-screen py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <img src={image14} alt="Services Offered" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Services Offered</h2>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            Ikoyi Central Mosque caters to the needs of the Muslims in and around Ikoyi – Lagos; their need for daily congregational prayers, Jummat prayer, Eid prayers, funeral services, daily Ta'alim/preaching, Nikkah & marriage counselling, alternative dispute resolution, collection & disbursement of Zakkat, Da'awa & outreach programs among others. Headed by the Chief Imam, the Ikoyi Central Mosque is being micro-managed by the Shuura/Ulama committee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;
