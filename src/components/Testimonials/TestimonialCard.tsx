import React from 'react';
import VerificationBadge from './VerificationBadge';

interface TestimonialCardProps {
  companyLogo: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const TestimonialCard = ({ companyLogo, name, role, company, quote }: TestimonialCardProps) => {
  return (
    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-[0_8px_32px_rgba(69,0,249,0.1)]">
      <div className="text-center space-y-6">
        <img 
          src={companyLogo}
          alt={company}
          className="h-10 mx-auto"
        />
        
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-[#CCAFFF]">{role}, {company}</p>
        </div>

        <p className="text-lg text-white/90 leading-relaxed">
          "{quote}"
        </p>

        <div className="flex justify-center">
          <VerificationBadge />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;