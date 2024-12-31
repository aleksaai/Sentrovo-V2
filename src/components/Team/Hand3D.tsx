import React from 'react';

interface Hand3DProps {
  side: 'left' | 'right';
  className?: string;
}

const Hand3D = ({ side, className = '' }: Hand3DProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute ${side === 'left' ? '-right-8' : '-left-8'} -bottom-4 w-24 h-24`}>
        {/* 3D Hand SVG */}
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full transform ${side === 'right' ? 'scale-x-[-1]' : ''}`}
        >
          <path
            d="M30 50 Q40 40, 50 45 T70 40"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="4"
            strokeLinecap="round"
            className={`animate-pulse ${side === 'left' ? 'origin-left' : 'origin-right'}`}
          />
        </svg>
      </div>
    </div>
  );
};

export default Hand3D;