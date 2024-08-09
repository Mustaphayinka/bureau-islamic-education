import React, { useState, useEffect } from 'react';
import image7 from '../assets/bfie7.jpeg';
import image8 from '../assets/bfie8.jpeg';
import image9 from '../assets/bfie9.jpeg';

const images = [image7, image8, image9];

const BriefHistory = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="w-screen py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Brief History</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <div className="relative w-full h-auto rounded-lg shadow-md overflow-hidden">
              <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="w-full h-auto" />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <p className="text-base md:text-lg leading-relaxed text-left">
              The concept of the BUREAU FOR ISLAMIC EDUCATION started as a school for Islamic Education (Madarasatul Nuril Islam Society) targeted to educate women living in Ikoyi and its environs in 1983 at No. 2 Glover Road, Ikoyi, Lagos. The Bureau for Islamic Education was duly registered at the Corporate Affairs Commission on the 21st November 1991 with a Certificate of Registration No. 6487 and a NINE (9) Member Board of Trustees. Before the death of Alhaji Abdulkadir Ahmed in 1993, he declared and dedicated the property at No. 17 Ruxton Road Ikoyi Lagos as WAQAF bequeathed to the Muslim Ummah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefHistory;
