import React from 'react';
import { Link } from 'react-router-dom';

const FooterLogo = () => {
  return (
    <div className="space-y-6">
      <Link to="/">
        <img 
          src="https://i.postimg.cc/BbSdBndC/67214d0664d9afbe71ca25b0-sentorov-2.png" 
          alt="Sentrovo" 
          className="h-8"
        />
      </Link>
      <p className="text-[#CCAFFF] text-sm leading-relaxed">
        Transformieren Sie Ihre Geschäftsprozesse mit modernster KI-Technologie. Sentrovo macht Ihre Unternehmensprozesse effizienter.
      </p>
    </div>
  );
};

export default FooterLogo;