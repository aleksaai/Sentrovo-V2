import React from 'react';
import { Phone, CheckCircle, XCircle } from 'lucide-react';

const CallLogsTable = () => {
  const logs = [
    { id: 1, time: '14:32', duration: '3m 24s', status: 'success' },
    { id: 2, time: '14:28', duration: '2m 15s', status: 'success' },
    { id: 3, time: '14:15', duration: '4m 02s', status: 'failed' },
    { id: 4, time: '14:02', duration: '1m 47s', status: 'success' },
  ];

  return (
    <div className="space-y-3">
      {logs.map((log) => (
        <div key={log.id} className="flex items-center justify-between p-2 rounded-lg bg-[#1F103B]/20 border border-[#ffffff0f]">
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-[#4500F9]" />
            <div>
              <p className="text-sm text-white">{log.time}</p>
              <p className="text-xs text-[#CCAFFF]">{log.duration}</p>
            </div>
          </div>
          {log.status === 'success' ? (
            <CheckCircle className="w-4 h-4 text-green-400" />
          ) : (
            <XCircle className="w-4 h-4 text-red-400" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CallLogsTable;