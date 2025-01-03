import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Bureau for Islamic Education. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
