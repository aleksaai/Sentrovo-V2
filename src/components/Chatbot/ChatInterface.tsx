import React from 'react';

const ChatInterface = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-3xl border border-[#ffffff1a] overflow-hidden w-full max-w-md">
      {/* Header */}
      <div className="bg-[#4500F9] p-4">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <span className="text-[#4500F9] font-bold">S</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-6 space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 bg-[#4500F9]/20 rounded-full flex items-center justify-center">
            <span className="text-[#4500F9] text-sm">S</span>
          </div>
          <div className="bg-[#1F103B]/30 rounded-2xl rounded-tl-none p-4 max-w-xs">
            <p className="text-[#CCAFFF]">Wie können wir dir weiterhelfen?</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#4500F9] rounded-2xl rounded-tr-none p-4 max-w-xs">
            <p className="text-white">Warum sollte ich mir einen KI Agenten zulegen?</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-8 h-8 bg-[#4500F9]/20 rounded-full flex items-center justify-center">
            <span className="text-[#4500F9] text-sm">S</span>
          </div>
          <div className="bg-[#1F103B]/30 rounded-2xl rounded-tl-none p-4 max-w-xs">
            <p className="text-[#CCAFFF]">Dafür gibt es mehr als genug gründe. Hier mal eine Auflistung an Vorteilen!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;