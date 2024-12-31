import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ConsultingSection from '../components/ConsultingSection';
import ChatbotSection from '../components/Chatbot/ChatbotSection';
import VoiceAgentsSection from '../components/VoiceAgents/VoiceAgentsSection';
import TeamSection from '../components/Team/TeamSection';
import TestimonialSection from '../components/Testimonials/TestimonialSection';
import CTASection from '../components/CTA/CTASection';
import FooterSection from '../components/Footer/FooterSection';
import GridBackground from '../components/GridBackground';

function Home() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white font-sans antialiased">
      <GridBackground />
      <Navigation />
      <div className="relative">
        <HeroSection />
        <ConsultingSection />
        <ChatbotSection />
        <VoiceAgentsSection />
        <TeamSection />
        <TestimonialSection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
}

export default Home;