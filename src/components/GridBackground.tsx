import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Large grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f103b1a_1px,transparent_1px),linear-gradient(to_bottom,#1f103b1a_1px,transparent_1px)] bg-[size:14rem_14rem]" />
      
      {/* Top central glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-[#4500F9]/20 via-transparent to-transparent opacity-60" />
      
      {/* Central light source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#4500F9]/10 via-transparent to-transparent opacity-40" />
      
      {/* Edge shadows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-[300px] bg-gradient-to-b from-black to-transparent opacity-80" />
        <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent opacity-80" />
        <div className="absolute left-0 w-[300px] h-full bg-gradient-to-r from-black to-transparent opacity-80" />
        <div className="absolute right-0 w-[300px] h-full bg-gradient-to-l from-black to-transparent opacity-80" />
      </div>
      
      {/* Subtle stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GridBackground;