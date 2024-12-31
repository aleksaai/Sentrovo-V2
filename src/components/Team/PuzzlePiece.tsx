import React from 'react';

interface PuzzlePieceProps {
  color: 'white' | 'purple';
  className?: string;
}

const PuzzlePiece = ({ color, className = '' }: PuzzlePieceProps) => {
  const baseColor = color === 'purple' ? '#4500F9' : 'white';
  
  return (
    <div className={`relative ${className}`}>
      <div 
        className={`w-16 h-16 rounded-xl transform transition-transform duration-500
          ${color === 'purple' ? 'bg-[#4500F9]/20' : 'bg-white/20'}
          hover:scale-105 cursor-pointer`}
        style={{
          boxShadow: `0 0 20px ${baseColor}20`,
          border: `2px solid ${baseColor}30`
        }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-50"
          style={{
            background: `radial-gradient(circle at center, ${baseColor}10 0%, transparent 70%)`
          }}
        />
      </div>
    </div>
  );
};

export default PuzzlePiece;