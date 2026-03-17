import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface PerformanceChartProps {
  timeRange: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ timeRange }) => {
  const data = [
    { date: 'Jan', AAPL: 170, MSFT: 350, TSLA: 240, GOOGL: 135 },
    { date: 'Feb', AAPL: 172, MSFT: 355, TSLA: 245, GOOGL: 138 },
    { date: 'Mar', AAPL: 174, MSFT: 360, TSLA: 248, GOOGL: 140 },
    { date: 'Apr', AAPL: 173, MSFT: 358, TSLA: 246, GOOGL: 139 },
    { date: 'May', AAPL: 175, MSFT: 365, TSLA: 250, GOOGL: 142 },
    { date: 'Jun', AAPL: 176, MSFT: 368, TSLA: 252, GOOGL: 143 },
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Performance Comparison
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="AAPL" stroke="#3b82f6" strokeWidth={2} name="AAPL" />
          <Line type="monotone" dataKey="MSFT" stroke="#22c55e" strokeWidth={2} name="MSFT" />
          <Line type="monotone" dataKey="TSLA" stroke="#f59e0b" strokeWidth={2} name="TSLA" />
          <Line type="monotone" dataKey="GOOGL" stroke="#ef4444" strokeWidth={2} name="GOOGL" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
