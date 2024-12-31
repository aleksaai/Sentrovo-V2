import React, { useState, useEffect } from 'react';

const services = [
  'Dienstleistung',
  'Voice Agents',
  'Chatbots',
  'Automationen',
  'Consulting'
];

const ServiceLabel = () => {
  const [currentService, setCurrentService] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const animateText = () => {
      const currentWord = services[currentService];
      
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          }, 50); // Faster typing speed
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, 25); // Faster deleting speed
        } else {
          setIsDeleting(false);
          setCurrentService((prev) => (prev + 1) % services.length);
        }
      }
    };

    timeout = setTimeout(animateText, 50);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentService]);

  return (
    <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]">
      <span className="text-sm font-semibold bg-gradient-to-r from-[#4500F9] to-[#CCAFFF] bg-clip-text text-transparent">
        KI
      </span>
      <span className="text-sm text-[#CCAFFF] min-w-[100px] inline-block">
        {displayText}<span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export default ServiceLabel;