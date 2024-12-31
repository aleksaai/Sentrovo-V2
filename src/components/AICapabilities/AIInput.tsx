import React from 'react';
import { Sparkles } from 'lucide-react';

const AIInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Schreiben Sie hier..."
        className="w-full bg-[#1F103B]/20 border border-[#ffffff0f] rounded-xl px-4 py-3 text-[#CCAFFF] placeholder-[#CCAFFF]/50 focus:outline-none focus:border-[#4500F9]/50 transition-colors"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2">
        <Sparkles className="w-5 h-5 text-[#4500F9]" />
      </button>
    </div>
  );
};

export default AIInput;