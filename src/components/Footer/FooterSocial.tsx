import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const FooterSocial = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-white font-semibold">Social Media</h3>
      <div className="flex gap-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#1F103B]/30 border border-white/10 flex items-center justify-center group hover:border-[#4500F9]/30 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-[#CCAFFF] group-hover:text-[#4500F9] transition-colors" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[#1F103B]/30 border border-white/10 flex items-center justify-center group hover:border-[#4500F9]/30 transition-colors"
        >
          <Instagram className="w-5 h-5 text-[#CCAFFF] group-hover:text-[#4500F9] transition-colors" />
        </a>
      </div>
      <div className="pt-4">
        <h4 className="text-white text-sm font-semibold mb-2">Newsletter</h4>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Ihre E-Mail"
            className="flex-1 bg-[#1F103B]/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-[#CCAFFF]/50 focus:outline-none focus:border-[#4500F9]/30"
          />
          <button className="px-4 py-2 bg-[#4500F9] hover:bg-[#4500F9]/90 text-white text-sm rounded-lg transition-colors">
            Anmelden
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;