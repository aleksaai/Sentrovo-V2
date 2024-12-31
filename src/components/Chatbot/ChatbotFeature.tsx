import React from 'react';

interface ChatbotFeatureProps {
  icon: string;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ChatbotFeature = ({ icon, text, isActive, onClick }: ChatbotFeatureProps) => {
  return (
    <div 
      className={`transform transition-all duration-300 hover:scale-105 cursor-pointer`}
      onClick={onClick}
    >
      <div className={`
        bg-black/40 backdrop-blur-sm px-6 py-3 rounded-xl border 
        ${isActive ? 'border-[#4500F9] shadow-[0_0_20px_rgba(69,0,249,0.2)]' : 'border-white/10'}
        flex items-center gap-3 transition-all duration-300
      `}>
        <span className="text-xl">{icon}</span>
        <span className="text-white/90 text-sm font-medium whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
};

export default ChatbotFeature;