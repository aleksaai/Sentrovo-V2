import React from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterBottom from './FooterBottom';

const FooterSection = () => {
  return (
    <footer className="relative pt-32 pb-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4500F9]/5 to-[#4500F9]/10 opacity-30" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#4500F9]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FooterLogo />
          <FooterLinks
            title="Produkte"
            links={[
              { label: 'KI Chatbots', href: '#chatbot' },
              { label: 'Voice Agents', href: '#voice' },
              { label: 'Consulting', href: '#consulting' },
            ]}
          />
          <FooterLinks
            title="Unternehmen"
            links={[
              { label: 'Über uns', href: '#team' },
              { label: 'Karriere', href: '/contact' },
              { label: 'Partner werden', href: '/contact' },
              { label: 'Blog', href: '/blog' },
            ]}
          />
          <FooterSocial />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterSection;