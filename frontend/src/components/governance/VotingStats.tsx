import React from 'react';
import { Vote, Users, TrendingUp, Award } from 'lucide-react';

const VotingStats: React.FC = () => {
  const stats = [
    { label: 'Total Proposals', value: '47', icon: Vote, change: '+3 this month' },
    { label: 'Active Voters', value: '2,843', icon: Users, change: '+12%' },
    { label: 'Participation Rate', value: '68%', icon: TrendingUp, change: '+5%' },
    { label: 'Proposals Passed', value: '32', icon: Award, change: '68% success rate' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {stat.change}
                </p>
              </div>
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VotingStats;
