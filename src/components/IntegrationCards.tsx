import React from 'react';
import { Server, Cloud, Database } from 'lucide-react';

const IntegrationCards = () => {
  const cards = [
    { icon: Server, title: 'On-Premise' },
    { icon: Cloud, title: 'Cloud Deploy' },
    { icon: Database, title: 'API Platform' },
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-16">
      {/* Circuit board lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 200">
          <path
            className="stroke-[#4500F9]/20"
            d="M200,100 L350,100 M450,100 L600,100"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
          />
          <path
            className="stroke-[#4500F9]/20"
            d="M200,100 L200,150 L600,150 L600,100"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
          />
          {/* Animated highlight */}
          <path
            className="stroke-[#4500F9]"
            d="M200,100 L350,100 M450,100 L600,100 M200,100 L200,150 L600,150 L600,100"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 4"
            strokeDashoffset="0"
            style={{
              animation: 'circuit 3s linear infinite',
            }}
          />
        </svg>
      </div>

      <div className="flex justify-between items-center relative">
        {cards.map(({ icon: Icon, title }, index) => (
          <div
            key={title}
            className="group relative z-10"
          >
            <div className="bg-[#131313] p-4 rounded-2xl border border-[#ffffff0f] hover:border-[#4500F9]/50 transition-all duration-300">
              <div className="bg-[#1F103B]/30 p-3 rounded-xl">
                <Icon className="w-6 h-6 text-[#4500F9]" />
              </div>
              <p className="text-[#CCAFFF] mt-2 text-sm">{title}</p>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#4500F9]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationCards;