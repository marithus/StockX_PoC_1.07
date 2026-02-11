import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface VolumeAnalysisProps {
  timeRange: string;
}

const VolumeAnalysis: React.FC<VolumeAnalysisProps> = ({ timeRange }) => {
  const data = [
    { date: 'Mon', volume: 2450000 },
    { date: 'Tue', volume: 3120000 },
    { date: 'Wed', volume: 2890000 },
    { date: 'Thu', volume: 3410000 },
    { date: 'Fri', volume: 2980000 },
    { date: 'Sat', volume: 1870000 },
    { date: 'Sun', volume: 1520000 },
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Volume Analysis
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
            formatter={(value: number) => [(value / 1000000).toFixed(2) + 'M', 'Volume']}
          />
          <Bar dataKey="volume" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VolumeAnalysis;
