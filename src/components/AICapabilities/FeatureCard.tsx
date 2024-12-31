import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  hoverText: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  hoverText,
  isActive,
  onMouseEnter,
  onMouseLeave
}: FeatureCardProps) => {
  return (
    <div
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`p-6 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-[#4500F9]/10 border-[#4500F9]/50' 
          : 'bg-[#1F103B]/10 border-[#ffffff0f]'
        } border hover:border-[#4500F9]/50`}
      >
        <Icon className={`w-6 h-6 mb-3 transition-colors duration-300 ${
          isActive ? 'text-[#4500F9]' : 'text-[#CCAFFF]'
        }`} />
        <div className="space-y-1">
          <p className="text-sm text-[#CCAFFF]">{title}</p>
          <p className="text-sm text-[#CCAFFF]">{description}</p>
        </div>
        
        {/* Hover Text */}
        <div className={`absolute inset-0 bg-[#131313]/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center text-center transition-all duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <p className="text-sm text-[#CCAFFF]">{hoverText}</p>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-[#4500F9]/5 rounded-xl blur-xl transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};

export default FeatureCard;