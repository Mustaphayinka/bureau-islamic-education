import React from 'react';
import MosqueHeader from '../../components/MosqueHeader';
import MosqueWelcomeSection from '../../components/MosqueWelcomeSection';
import EventsAndAnnouncements from '../../components/EventsAndAnnouncements';
import WordsOfWisdom from '../../components/WordsOfWisdom';
import ServicesOffered from '../../components/ServicesOffered';
import ContactInformation from '../../components/ContactInformation';
import Footer from '../../components/Footer';

const IkoyiCentralMosque = () => {
  return (
    <div>
      <MosqueHeader />
      <main>
        <MosqueWelcomeSection />

        <EventsAndAnnouncements />

        <WordsOfWisdom />

        <ServicesOffered />
        <ContactInformation />
      </main>
      <Footer />
    </div>
  );
};

export default IkoyiCentralMosque;
