import React, { useState } from 'react';

interface RobotMascotProps {
  lookDirection: 'left' | 'center' | 'right';
}

const RobotMascot = ({ lookDirection }: RobotMascotProps) => {
  // Calculate transform based on look direction
  const getTransform = () => {
    switch (lookDirection) {
      case 'left':
        return 'rotate(-15deg)';
      case 'right':
        return 'rotate(15deg)';
      default:
        return 'rotate(0deg)';
    }
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#4500F9]/20 rounded-full blur-3xl transform scale-150" />
      
      {/* Robot Image with Dynamic Rotation */}
      <div 
        className="relative transition-transform duration-700 ease-out"
        style={{ transform: getTransform() }}
      >
        <img
          src="https://i.postimg.cc/L5rNqCsp/5-1.png"
          alt="Sentrovo AI"
          className="w-full h-full object-contain"
        />
        
        {/* Animated Glow Ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4500F9]/0 via-[#4500F9]/20 to-[#4500F9]/0 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default RobotMascot;