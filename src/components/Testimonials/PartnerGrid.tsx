import React from 'react';

const partners = [
  {
    name: 'Valkental',
    logo: 'https://i.postimg.cc/YShWsNw4/image-19.png'
  },
  {
    name: 'Ryzon',
    logo: 'https://i.postimg.cc/nVRtHv8V/image-20.png'
  },
  {
    name: 'Tivian',
    logo: 'https://i.postimg.cc/mkhJc5xL/image-21.png'
  },
  {
    name: 'ITB',
    logo: 'https://i.postimg.cc/zfjcxr8D/672146cf18f0258db6c4bbca-itb-logo-1.png'
  }
];

const PartnerGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {partners.map((partner) => (
        <div 
          key={partner.name}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#4500F9]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Card */}
          <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-32 flex items-center justify-center group-hover:border-[#4500F9]/30 transition-colors duration-300">
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerGrid;