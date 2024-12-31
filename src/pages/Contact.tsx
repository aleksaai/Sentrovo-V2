import React from 'react';
import Navigation from '../components/Navigation';
import GridBackground from '../components/GridBackground';
import ContactForm from '../components/Contact/ContactForm';
import FooterSection from '../components/Footer/FooterSection';
import { useScrollToTop } from '../utils/scrollUtils';

const Contact = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white font-sans antialiased">
      <GridBackground />
      <Navigation />
      <ContactForm />
      <FooterSection />
    </div>
  );
};

export default Contact;