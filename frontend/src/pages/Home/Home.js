import React from 'react';
import bfie1 from '../../assets/bfie1.jpeg';
import bfie2 from '../../assets/bfie2.jpeg';
import bfie3 from '../../assets/bfie3.jpeg';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Bureau for Islamic Education</h1>
          <p className="mt-2 text-lg">Empowering through knowledge and faith</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section className="text-center py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">Main Hero Message to Sell Yourself!</h1>
            <p className="text-lg mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
            <button className="bg-white text-green-500 font-semibold py-2 px-4 rounded-full">Subscribe</button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                <img src={bfie1} alt="About Us" className="w-full h-auto rounded-lg shadow-md"/>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <p className="text-lg leading-relaxed">
                  Welcome to the Bureau for Islamic Education. We are dedicated to providing quality education and fostering a deep understanding of Islamic values and principles. Our mission is to educate and inspire individuals through a curriculum that integrates academic excellence and spiritual growth. Our board of trustees comprises distinguished individuals committed to guiding our organization towards achieving its goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-200">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Mission and Objectives</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Our mission is to educate and inspire individuals through a curriculum that integrates academic excellence and spiritual growth. We strive to create an environment that nurtures the holistic development of each student, fostering both intellectual and spiritual growth.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-full">Learn More</button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Board of Trustees</h2>
            <p className="text-center max-w-2xl mx-auto">
              Our board of trustees comprises distinguished individuals committed to guiding our organization towards achieving its goals.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-200">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Approved Working Documents</h2>
            <p className="text-center max-w-2xl mx-auto">
              Explore our approved working documents that outline our policies, procedures, and educational frameworks.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Prayer Schedule</h2>
            <p className="text-center max-w-2xl mx-auto">
              Stay updated with our daily prayer schedule and join our community in worship and reflection.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-200">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Donations/Support</h2>
            <p className="text-center max-w-2xl mx-auto">
              Your support is vital to our mission. Learn how you can contribute to our cause and make a difference.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <img src={bfie1} alt="Gallery Image 1" className="w-full h-auto rounded-lg shadow-md"/>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <img src={bfie2} alt="Gallery Image 2" className="w-full h-auto rounded-lg shadow-md"/>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <img src={bfie3} alt="Gallery Image 3" className="w-full h-auto rounded-lg shadow-md"/>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-500 to-green-400 text-white text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Call to Action</h2>
            <p className="text-lg mb-8">Main Hero Message to sell yourself!</p>
            <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full">Action!</button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Bureau for Islamic Education. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
