import React from 'react';

const WordsOfWisdom = () => {
  return (
    <section className="w-screen py-10 md:py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-green-600">Words of Wisdom</h2>
        <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
          "The best among you are those who have the best manners and character." - Prophet Muhammad (PBUH)
        </p>
      </div>
    </section>
  );
};

export default WordsOfWisdom;
