import React, { useRef, useEffect } from 'react';
import { Calendar, DollarSign, Users, Activity } from 'lucide-react';
import StatsCard from './StatsCard';
import CallLogsTable from './CallLogsTable';
import CallVolumeChart from './CallVolumeChart';

const CallLogsDashboard = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return;
      
      const rect = dashboardRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight / 2)));
      
      const rotateX = 40 - (scrollProgress * 40);
      const translateY = 150 - (scrollProgress * 150);
      const scale = 0.95 + (scrollProgress * 0.05);
      
      // Only apply 3D effects on desktop
      if (window.innerWidth >= 1024) {
        dashboardRef.current.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          translateY(${translateY}px)
          scale(${scale})
        `;
      }
      dashboardRef.current.style.opacity = Math.min(1, scrollProgress + 0.2).toString();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={dashboardRef}
      className="w-full max-w-6xl mx-auto mt-8 lg:mt-16 relative transition-all duration-700 ease-out"
      style={{ transformOrigin: 'center top' }}
    >
      <div className="bg-[#1F103B]/10 backdrop-blur-md rounded-2xl border border-[#ffffff0f] p-4 lg:p-6 shadow-[0_0_50px_-12px_rgba(69,0,249,0.25)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-4 lg:mb-6">
          <StatsCard icon={DollarSign} title="Betriebskosten gesenkt" value="-42%" trend="-42%" trendColor="green" valueColor="white" />
          <StatsCard icon={Users} title="Aktive KI-Mitarbeiter" value="5" trend="+8,2%" valueColor="white" />
          <StatsCard icon={Calendar} title="Termine gebucht" value="233" trend="+7%" valueColor="white" />
          <StatsCard icon={Activity} title="Erfolgsrate" value="98,3%" trend="+1,4%" valueColor="white" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="lg:col-span-2 bg-[#131313]/30 rounded-xl p-4 border border-[#ffffff0f] shadow-[0_0_30px_-12px_rgba(69,0,249,0.15)]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-2">
              <h3 className="text-[#CCAFFF] font-medium">Anrufvolumen</h3>
              <select className="w-full lg:w-auto bg-[#1F103B]/30 text-[#CCAFFF] border border-[#ffffff0f] rounded-lg px-2 py-1 text-sm">
                <option>Letzte 7 Tage</option>
                <option>Letzte 30 Tage</option>
                <option>Letzte 90 Tage</option>
              </select>
            </div>
            <CallVolumeChart />
          </div>

          <div className="bg-[#131313]/30 rounded-xl p-4 border border-[#ffffff0f] shadow-[0_0_30px_-12px_rgba(69,0,249,0.15)]">
            <h3 className="text-[#CCAFFF] font-medium mb-4">Aktuelle Anrufe</h3>
            <CallLogsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogsDashboard;