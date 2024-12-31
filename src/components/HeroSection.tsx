import React from 'react';
import ServiceLabel from './ServiceLabel';
import CallLogsDashboard from './Dashboard/CallLogsDashboard';
import MobileCallLogsDashboard from './Dashboard/MobileCallLogsDashboard';
import CTAButton from './shared/CTAButton';

const HeroSection = () => {
  return (
    <div className="relative pt-32 lg:pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-8 lg:mb-16">
          <ServiceLabel />
          <h1 className="text-4xl lg:text-7xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent">
            Intelligente Automation
          </h1>
          <p className="text-lg lg:text-xl text-[#CCAFFF] max-w-4xl mx-auto mb-6 lg:mb-8 font-light whitespace-nowrap overflow-hidden text-ellipsis px-4">
            Transformieren Sie Ihre Geschäftsprozesse mit KI der nächsten Generation.
          </p>
          
          <CTAButton text="KI Audit Buchen" />
        </div>

        {/* Show different dashboards based on screen size */}
        <div className="hidden lg:block">
          <CallLogsDashboard />
        </div>
        <div className="lg:hidden">
          <MobileCallLogsDashboard />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;