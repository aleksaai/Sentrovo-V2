import React from 'react';
import { MessageSquare } from 'lucide-react';

const ContactHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]">
        <MessageSquare className="w-4 h-4 text-[#4500F9]" />
        <span className="text-sm text-[#CCAFFF]">Kontakt</span>
      </div>
      
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent mb-4">
        Sprechen Sie mit uns
      </h1>
      
      <p className="text-xl text-[#CCAFFF] max-w-2xl mx-auto">
        Lassen Sie uns gemeinsam Ihre Geschäftsprozesse optimieren und in die Zukunft führen
      </p>
    </div>
  );
};

export default ContactHeader;