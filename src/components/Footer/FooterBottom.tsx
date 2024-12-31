import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <div className="pt-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[#CCAFFF]/60 text-sm">
          © 2024 Sentrovo. Alle Rechte vorbehalten.
        </div>
        <div className="flex gap-6">
          <Link to="/impressum" className="text-[#CCAFFF]/60 hover:text-white text-sm transition-colors">
            Impressum
          </Link>
          <Link to="/impressum#datenschutz" className="text-[#CCAFFF]/60 hover:text-white text-sm transition-colors">
            Datenschutz
          </Link>
          <Link to="/impressum#agb" className="text-[#CCAFFF]/60 hover:text-white text-sm transition-colors">
            AGB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;