import React, { useState } from 'react';
import RobotMascot from './RobotMascot';
import { Users } from 'lucide-react';

const TeamSection = () => {
  const [robotLook, setRobotLook] = useState<'left' | 'center' | 'right'>('center');

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#4500F9]/5 via-transparent to-transparent opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]">
            <Users className="w-4 h-4 text-[#4500F9]" />
            <span className="text-sm text-[#CCAFFF]">Sentrovo</span>
          </div>
          
          <h2 className="text-6xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent">
            Unser Team
          </h2>
        </div>

        {/* Team members and connecting elements */}
        <div className="relative flex justify-between items-center min-h-[400px]">
          {/* Left Profile */}
          <div 
            className="relative text-center"
            onMouseEnter={() => setRobotLook('left')}
            onMouseLeave={() => setRobotLook('center')}
          >
            <div className="relative w-72 h-72 transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-[#4500F9]/20 rounded-full blur-2xl transform scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#4500F9]/30">
                <img
                  src="https://i.postimg.cc/Bbvd5VsP/AW.jpg"
                  alt="Aurelien Wilmes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#9D7EFF] mt-6">Aurelien Wilmes</h3>
            <p className="text-sm text-[#CCAFFF]/80">Founder Sentrovo</p>
          </div>

          {/* Center Robot Mascot */}
          <div className="relative flex-1 mx-12">
            <RobotMascot lookDirection={robotLook} />
          </div>

          {/* Right Profile */}
          <div 
            className="relative text-center"
            onMouseEnter={() => setRobotLook('right')}
            onMouseLeave={() => setRobotLook('center')}
          >
            <div className="relative w-72 h-72 transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-[#4500F9]/20 rounded-full blur-2xl transform scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#4500F9]/30">
                <img
                  src="https://i.postimg.cc/jjH0RfZ2/RN-Full.jpg"
                  alt="Raphael Niklewitz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#9D7EFF] mt-6">Raphael Niklewitz</h3>
            <p className="text-sm text-[#CCAFFF]/80">Founder Sentrovo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;