import React from 'react';

const CenterPuzzle = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        {/* Connecting hands animation */}
        <div className="absolute -left-16 -right-16 top-1/2 -translate-y-1/2">
          <div className="relative h-24">
            {/* Left hand */}
            <div className="absolute left-0 transform -translate-x-full animate-pulse">
              <svg width="60" height="60" viewBox="0 0 100 100">
                <path
                  d="M70 50 Q60 45, 50 45 T30 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* Right hand */}
            <div className="absolute right-0 transform translate-x-full animate-pulse">
              <svg width="60" height="60" viewBox="0 0 100 100">
                <path
                  d="M30 50 Q40 45, 50 45 T70 40"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Central connecting puzzle pieces */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#4500F9]/10 rounded-xl blur-xl" />
          <div className="relative flex items-center justify-center gap-2 bg-[#1F103B]/50 backdrop-blur-sm p-4 rounded-xl border border-[#ffffff1a]">
            <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30 animate-pulse" />
            <div className="w-8 h-8 bg-[#4500F9]/20 rounded-lg border border-[#4500F9]/30 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterPuzzle;