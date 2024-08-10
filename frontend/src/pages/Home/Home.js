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
        <DonationsSupport />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
