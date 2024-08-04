import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Bureau for Islamic Education</h1>
          <p className="mt-2 text-lg">Empowering through knowledge and faith</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
          <p className="text-center max-w-2xl mx-auto">
            Welcome to the Bureau for Islamic Education. We are dedicated to providing quality education and fostering a deep understanding of Islamic values and principles.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">Mission and Static Objectives</h2>
          <p className="text-center max-w-2xl mx-auto">
            Our mission is to educate and inspire individuals through a curriculum that integrates academic excellence and spiritual growth.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">Board of Trustees</h2>
          <p className="text-center max-w-2xl mx-auto">
            Our board of trustees comprises distinguished individuals committed to guiding our organization towards achieving its goals.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">Approved Working Documents</h2>
          <p className="text-center max-w-2xl mx-auto">
            Explore our approved working documents that outline our policies, procedures, and educational frameworks.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">Prayer Schedule</h2>
          <p className="text-center max-w-2xl mx-auto">
            Stay updated with our daily prayer schedule and join our community in worship and reflection.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">Donations/Support</h2>
          <p className="text-center max-w-2xl mx-auto">
            Your support is vital to our mission. Learn how you can contribute to our cause and make a difference.
          </p>
        </section>

        <section className="text-center py-10">
          <h2 className="text-3xl font-bold mb-6">Gallery</h2>
          <div className="flex justify-center items-center flex-wrap">
            <div className="w-1/3 p-2">
              <img src="https://via.placeholder.com/300" alt="Placeholder Image 1" className="w-full h-auto rounded-lg shadow-md"/>
            </div>
            <div className="w-1/3 p-2">
              <img src="https://via.placeholder.com/300" alt="Placeholder Image 2" className="w-full h-auto rounded-lg shadow-md"/>
            </div>
            <div className="w-1/3 p-2">
              <img src="https://via.placeholder.com/300" alt="Placeholder Image 3" className="w-full h-auto rounded-lg shadow-md"/>
            </div>
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
