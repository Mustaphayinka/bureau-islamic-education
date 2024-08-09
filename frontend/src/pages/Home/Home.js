import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ApprovedDocuments from '../../components/ApprovedDocuments';
import BriefHistory from '../../components/BriefHistory'; // Import the new component
import WelcomeSection from '../../components/WelcomeSection';
import DonationsSupport from '../../components/DonationsSupport';
import AboutSection from '../../components/AboutSection';
import PrayerSchedule from '../../components/PrayerSchedule'; // Import the PrayerSchedule component
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main> 
        <WelcomeSection />
        <BriefHistory />
        <AboutSection />
        <PrayerSchedule />  {/* Ensure the PrayerSchedule component is included here */}
        <ApprovedDocuments />
        <section className="w-screen py-10 md:py-20 bg-gray-200">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Vision, Mission, and Strategic Objectives</h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
              The Bureau for Islamic Education is a socio-religious and benevolent organization with the fundamental objective of promoting and propagating the true teachings of Islam by educating/enlightening Muslims and fostering friendship, cooperation, and understanding among Muslims and between Muslims and adherents of other faiths. These objectives are achieved through the establishment of schools, building of mosques, social rehabilitation, and empowerment of vulnerable individuals, and more.
            </p>
          </div>
        </section>
        <DonationsSupport />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
