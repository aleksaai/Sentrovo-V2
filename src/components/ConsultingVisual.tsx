import React from 'react';
import { Brain, Cpu, Network, Workflow } from 'lucide-react';

const ConsultingVisual = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-16">
      {/* Central brain icon with pulsing effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-[#4500F9]/20 rounded-full animate-ping" />
          <div className="relative bg-[#1F103B] p-6 rounded-full border border-[#4500F9]">
            <Brain className="w-12 h-12 text-[#4500F9]" />
          </div>
        </div>
      </div>

      {/* Orbiting elements */}
      {[Cpu, Network, Workflow].map((Icon, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            animation: `orbit ${10 + index * 2}s linear infinite`,
            transformOrigin: 'center',
            left: '50%',
            top: '50%',
          }}
        >
          <div 
            className="bg-[#1F103B] p-3 rounded-lg border border-[#4500F9]/30 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-${100 + index * 50}px, 0)`,
            }}
          >
            <Icon className="w-6 h-6 text-[#4500F9]" />
          </div>
        </div>
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(0deg)' }}>
        <circle
          cx="50%"
          cy="50%"
          r="100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-spin"
          style={{ animationDuration: '20s' }}
        />
        <circle
          cx="50%"
          cy="50%"
          r="150"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="animate-spin"
          style={{ animationDuration: '25s' }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4500F9" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4500F9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4500F9" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ConsultingVisual;