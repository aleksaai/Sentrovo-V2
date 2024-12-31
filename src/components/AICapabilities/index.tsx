import React from 'react';
import FeatureGrid from './FeatureGrid';
import AIInput from './AIInput';

const AICapabilities = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Interactive Feature Display */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#131313]/80 backdrop-blur-sm rounded-2xl border border-[#ffffff0f] p-6 relative overflow-hidden">
              <FeatureGrid />
              <div className="mt-6">
                <AIInput />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]">
              <span className="text-sm text-[#CCAFFF]">AI Discovery</span>
            </div>
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent">
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