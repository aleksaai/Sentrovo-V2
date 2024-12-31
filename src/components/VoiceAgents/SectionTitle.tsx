import React from 'react';
import { Mic } from 'lucide-react';

const SectionTitle = () => {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]">
        <Mic className="w-4 h-4 text-[#4500F9]" />
        <span className="text-sm text-[#CCAFFF]">Voice AI</span>
      </div>
      
      <h2 className="text-6xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent mb-6">
        KI Voice Agenten
      </h2>
      
      <p className="text-xl text-[#CCAFFF] max-w-2xl mx-auto">
        KI Sprachassistenten für Ihr Unternehmen
      </p>
    </div>
  );
}

export default SectionTitle;