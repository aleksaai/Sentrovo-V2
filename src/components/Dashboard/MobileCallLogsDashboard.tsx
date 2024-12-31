import React from 'react';
import { Calendar, Activity, TrendingUp } from 'lucide-react';

const MobileCallLogsDashboard = () => {
  return (
    <div className="w-full px-4">
      <div className="bg-[#1F103B]/10 backdrop-blur-md rounded-xl border border-[#ffffff0f] p-4 shadow-[0_0_30px_-12px_rgba(69,0,249,0.25)]">
        {/* Main Profit Card with Enhanced Glow */}
        <div className="bg-[#131313]/30 rounded-lg p-4 border border-[#ffffff0f] mb-4 relative overflow-hidden">
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-[#4500F9]/20 blur-xl" />
          
          <div className="relative flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#4500F9]/20 rounded-lg">
                <TrendingUp className="w-4 h-4 text-[#4500F9]" />
              </div>
              <span className="text-[#CCAFFF] font-medium">Profit Übersicht</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-sm">+42%</span>
              <div className="w-20 h-8 bg-[#1F103B]/20 rounded-lg overflow-hidden relative">
                {/* Enhanced progress bar with stronger glow */}
                <div className="absolute inset-0 bg-[#4500F9]/30 blur-md" style={{ width: '42%' }} />
                <div 
                  className="relative h-full bg-gradient-to-r from-[#4500F9]/40 to-[#4500F9]/60"
                  style={{ width: '42%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Stats - Only Termine and Erfolg */}
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full">
            <StatsBox
              icon={Calendar}
              label="Termine"
              value="233"
              trend="+7%"
            />
          </div>
          <div className="w-full">
            <StatsBox
              icon={Activity}
              label="Erfolg"
              value="98%"
              trend="+1.4%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for stats boxes
const StatsBox = ({ 
  icon: Icon, 
  label, 
  value, 
  trend
}: { 
  icon: any; 
  label: string; 
  value: string; 
  trend: string;
}) => {
  return (
    <div className="bg-[#131313]/30 rounded-lg p-3 border border-[#ffffff0f]">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-[#4500F9]" />
        <span className="text-[#CCAFFF] text-xs">{label}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-white font-medium">{value}</span>
        <span className="text-xs text-green-400">{trend}</span>
      </div>
    </div>
  );
};

export default MobileCallLogsDashboard;