import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  trend: string;
  trendColor?: 'green' | 'red';
  valueColor?: 'white' | 'default';
}

const StatsCard = ({ 
  icon: Icon, 
  title, 
  value, 
  trend, 
  trendColor = 'default',
  valueColor = 'default'
}: StatsCardProps) => {
  const getTrendColor = () => {
    if (trendColor === 'green') return 'text-green-400';
    if (trendColor === 'red') return 'text-red-400';
    return trend.startsWith('+') ? 'text-green-400' : 'text-red-400';
  };

  const getValueColor = () => {
    return valueColor === 'white' ? 'text-white' : 'text-[#CCAFFF]';
  };
  
  return (
    <div className="bg-[#131313]/30 rounded-xl p-4 border border-[#ffffff0f]">
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-5 h-5 text-[#4500F9]" />
        <span className={getTrendColor()}>
          {trend}
        </span>
      </div>
      <p className="text-[#CCAFFF] text-sm mb-1">{title}</p>
      <p className={`text-2xl font-semibold ${getValueColor()}`}>{value}</p>
    </div>
  );
};

export default StatsCard;