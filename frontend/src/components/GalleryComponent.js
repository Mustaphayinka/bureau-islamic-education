import React from 'react';
import Slider from 'react-slick';

// Importing the gallery images
import bfie15 from '../assets/bfie15.jpg';
import bfie16 from '../assets/bfie16.jpg';
import bfie17 from '../assets/bfie17.jpg';
import bfie18 from '../assets/bfie18.jpg';
import bfie19 from '../assets/bfie19.jpg';
import bfie20 from '../assets/bfie20.jpg';
import bfie21 from '../assets/bfie21.jpg';
import bfie22 from '../assets/bfie22.jpg';
import bfie23 from '../assets/bfie23.jpg';
import bfie24 from '../assets/bfie24.jpg';
import bfie25 from '../assets/bfie25.jpg';

const GalleryComponent = () => {
  const images = [
    bfie15,
    bfie16,
    bfie17,
    bfie18,
    bfie19,
    bfie20,
    bfie21,
    bfie22,
    bfie23,
    bfie24,
    bfie25,
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">Gallery</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GalleryComponent;
