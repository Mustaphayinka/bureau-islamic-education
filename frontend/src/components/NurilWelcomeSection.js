import React from 'react';
import image from '../assets/bfie1.jpeg';

const NurilWelcomeSection = () => {
  return (
    <section
      className="w-screen h-80 md:h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-center bg-black bg-opacity-50 px-4 py-2 rounded">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Nuril Islam School</h2>
      </div>
    </section>
  );
};

export default NurilWelcomeSection;
