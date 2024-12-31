import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic circuit patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-[#4500F9]/20"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 20}s linear infinite`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated gradient meshes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#4500F9]/20 via-transparent to-transparent animate-pulse" 
             style={{ transform: 'scale(1.5)', animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-[#CCAFFF]/20 via-transparent to-transparent animate-pulse" 
             style={{ transform: 'scale(1.5)', animationDuration: '6s' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#4500F9]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 3 + 2}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0F] via-[#0A0B0F]/80 to-[#0A0B0F]" />
    </div>
  );
};

export default AnimatedBackground;