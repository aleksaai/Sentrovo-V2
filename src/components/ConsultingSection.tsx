import React from 'react';
import { Newspaper, Bookmark, Smartphone, Zap } from 'lucide-react';

const ConsultingSection = () => {
  const features = [
    {
      icon: Newspaper,
      title: 'Strategieberatung',
      description: 'Entwickeln Sie mit uns Ihre individuelle KI-Strategie für nachhaltige Transformation.'
    },
    {
      icon: Bookmark,
      title: 'Prozessoptimierung',
      description: 'Identifizieren und automatisieren Sie Prozesse für maximale Effizienz.'
    },
    {
      icon: Smartphone,
      title: 'Implementierung',
      description: 'Nahtlose Integration von KI-Lösungen in Ihre bestehende Infrastruktur.'
    }
  ];

  return (
    <section id="consulting" className="relative py-16 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4500F9]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]">
            <Zap className="w-4 h-4 text-[#4500F9]" />
            <span className="text-sm text-[#CCAFFF]">How it works</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent">
            KI Consulting für Ihren Erfolg
          </h2>
          
          <p className="text-base lg:text-lg text-[#CCAFFF] max-w-2xl mb-8">
            Nutzen Sie unser Expertenwissen für die erfolgreiche Integration von KI in Ihr Unternehmen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#1F103B]/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#ffffff0f] hover:border-[#4500F9]/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4500F9]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="mb-6 p-3 bg-[#4500F9]/10 rounded-xl w-fit">
                    <Icon className="w-6 h-6 text-[#4500F9]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#CCAFFF]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;