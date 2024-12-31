import React, { useState } from 'react';
import { Pencil, Image, Mic, Sparkles } from 'lucide-react';

const AICapabilities = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Pencil,
      title: 'Komplexe Fragen',
      description: 'Beantworten',
      hoverText: 'Stellen Sie komplexe Fragen und erhalten Sie präzise Antworten'
    },
    {
      icon: Image,
      title: 'Digitale Kunst',
      description: 'Erstellen',
      hoverText: 'Generieren Sie einzigartige digitale Kunstwerke mit KI'
    },
    {
      icon: Mic,
      title: 'Sprach-',
      description: 'befehle',
      hoverText: 'Steuern Sie Ihre Anwendungen durch Sprachbefehle'
    },
    {
      icon: Sparkles,
      title: 'KI Content',
      description: 'Generieren',
      hoverText: 'Erstellen Sie professionelle Inhalte mit KI-Unterstützung'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Interactive Feature Display */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#131313]/80 backdrop-blur-sm rounded-2xl border border-[#ffffff0f] p-6 relative overflow-hidden">
              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setActiveFeature(index)}
                      onMouseLeave={() => setActiveFeature(null)}
                    >
                      <div className={`p-6 rounded-xl transition-all duration-300 ${
                        activeFeature === index 
                          ? 'bg-[#4500F9]/10 border-[#4500F9]/50' 
                          : 'bg-[#1F103B]/10 border-[#ffffff0f]'
                        } border hover:border-[#4500F9]/50`}
                      >
                        <Icon className={`w-6 h-6 mb-3 transition-colors duration-300 ${
                          activeFeature === index ? 'text-[#4500F9]' : 'text-[#CCAFFF]'
                        }`} />
                        <div className="space-y-1">
                          <p className="text-sm text-[#CCAFFF]">{feature.title}</p>
                          <p className="text-sm text-[#CCAFFF]">{feature.description}</p>
                        </div>
                        
                        {/* Hover Text */}
                        <div className={`absolute inset-0 bg-[#131313]/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center text-center transition-all duration-300 ${
                          activeFeature === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}>
                          <p className="text-sm text-[#CCAFFF]">{feature.hoverText}</p>
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-[#4500F9]/5 rounded-xl blur-xl transition-opacity duration-300 ${
                        activeFeature === index ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </div>
                  );
                })}
              </div>

              {/* Input Field */}
              <div className="mt-6">
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
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]">
              <span className="text-sm text-[#CCAFFF]">AI Discovery</span>
            </div>
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-[#CCAFFF] bg-clip-text text-transparent">
              KI Funktionen<br />Entdecken
            </h2>
            
            <p className="text-lg text-[#CCAFFF] max-w-xl">
              Tauchen Sie ein in die faszinierende Welt der künstlichen Intelligenz. 
              Entdecken Sie modernste Funktionen und Möglichkeiten, die Ihre 
              Arbeit revolutionieren werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;