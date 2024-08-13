import React from 'react';
import image13 from '../assets/bfie13.jpeg'; // Adjust the path as needed

const WordsOfWisdom = () => {
  return (
    <section className="w-screen py-10 md:py-20 bg-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <img src={image13} alt="Words of Wisdom" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:w-1/2 p-4 relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Words of Wisdom</h2>
          <div className="text-base md:text-lg leading-relaxed text-center md:text-left max-w-3xl mx-auto md:mx-0 animate-scroll whitespace-normal">
            <p>
              The best among you are those who have the best manners and character." - Prophet Muhammad (PBUH)
            </p>
          </div>
        </div>
      </div>

      {/* Inline CSS for Font and Animation */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

        h2, p {
          font-family: 'Playfair Display', serif;
        }

        @keyframes scrollText {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-scroll {
          display: inline-block;
          animation: scrollText 10s linear infinite;
          overflow-wrap: break-word;
          word-wrap: break-word;
          white-space: normal;
        }
      `}</style>
    </section>
  );
};

export default WordsOfWisdom;
