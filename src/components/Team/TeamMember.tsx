import React from 'react';
import Hand3D from './Hand3D';
import PuzzlePiece from './PuzzlePiece';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  align: 'left' | 'right';
}

const TeamMember = ({ name, role, imageUrl, align }: TeamMemberProps) => {
  return (
    <div className={`relative ${align === 'left' ? 'text-left' : 'text-right'}`}>
      <div className="relative">
        {/* Glowing circle behind image */}
        <div className="absolute inset-0 bg-[#4500F9]/20 rounded-full blur-xl transform scale-110" />
        
        {/* Main image container */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-[#4500F9]/30 shadow-[0_0_30px_rgba(69,0,249,0.3)]">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3D Hand and Puzzle Piece */}
        <div className={`absolute ${align === 'left' ? '-right-24' : '-left-24'} top-1/2 -translate-y-1/2`}>
          <Hand3D side={align} />
          <PuzzlePiece color={align === 'left' ? 'white' : 'purple'} />
        </div>
      </div>

      {/* Text content */}
      <div className={`mt-6 space-y-1 ${align === 'left' ? 'ml-4' : 'mr-4'}`}>
        <h3 className="text-xl font-semibold text-[#CCAFFF]">{name}</h3>
        <p className="text-sm text-[#CCAFFF]/80">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;