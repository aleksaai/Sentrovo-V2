import React from 'react';
import { MessageSquare, Phone, Calendar, Mic } from 'lucide-react';

const VoiceInterface = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4500F9]/20 via-[#4500F9]/10 to-transparent blur-xl" />
      
      <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Voice Widget */}
          <div className="relative">
            <div className="aspect-square bg-[#1F103B]/30 rounded-2xl flex items-center justify-center">
              <div className="absolute inset-0 w-full h-full">
                <elevenlabs-convai 
                  agent-id="YpAE3qOCHs2XQ2Vf6ZOD"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '165px',
                    left: '-90px'
                  }}
                ></elevenlabs-convai>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Intelligente Sprachverarbeitung
            </h3>
            
            <div className="grid gap-4">
              {[
                {
                  icon: MessageSquare,
                  title: "Natürliche Sprache",
                  description: "Versteht und spricht wie ein Mensch"
                },
                {
                  icon: Phone,
                  title: "24/7 Erreichbarkeit",
                  description: "Immer für Ihre Kunden verfügbar"
                },
                {
                  icon: Calendar,
                  title: "Automatische Terminierung",
                  description: "Koordiniert Termine selbstständig"
                },
                {
                  icon: Mic,
                  title: "Live Testen",
                  description: "Auf das Mikrofon klicken & testen"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#1F103B]/20 hover:bg-[#1F103B]/30 hover:border-[#4500F9]/20 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-[#4500F9]/20">
                    <feature.icon className="w-5 h-5 text-[#4500F9]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                    <p className="text-[#CCAFFF] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceInterface;