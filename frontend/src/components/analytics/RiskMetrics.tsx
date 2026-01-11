import React from 'react';
import { AlertTriangle, Shield, Activity } from 'lucide-react';

const RiskMetrics: React.FC = () => {
  const metrics = [
    { label: 'Portfolio Risk', value: 'Medium', level: 'medium' as const, icon: AlertTriangle },
    { label: 'Beta', value: '1.24', level: 'medium' as const, icon: Activity },
    { label: 'Sharpe Ratio', value: '2.18', level: 'low' as const, icon: Shield },
    { label: 'Volatility', value: '18.5%', level: 'medium' as const, icon: Activity },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'text-success-600 dark:text-success-400 bg-success-100 dark:bg-success-900/30';
      case 'medium':
        return 'text-warning-600 dark:text-warning-400 bg-warning-100 dark:bg-warning-900/30';
      case 'high':
        return 'text-danger-600 dark:text-danger-400 bg-danger-100 dark:bg-danger-900/30';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800';
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Risk Metrics
      </h2>
      <div className="space-y-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getLevelColor(metric.level)}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{metric.label}</p>
                  <p className={`text-xs font-medium ${getLevelColor(metric.level)} px-2 py-1 rounded mt-1 inline-block`}>
                    {metric.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RiskMetrics;
