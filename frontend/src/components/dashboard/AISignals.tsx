import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const AISignals: React.FC = () => {
  const signals = [
    { symbol: 'AAPL', type: 'bullish' as const, confidence: 85, time: '5 min ago' },
    { symbol: 'MSFT', type: 'bullish' as const, confidence: 72, time: '12 min ago' },
    { symbol: 'TSLA', type: 'bearish' as const, confidence: 68, time: '1 hour ago' },
    { symbol: 'GOOGL', type: 'neutral' as const, confidence: 45, time: '2 hours ago' },
  ];

  const getSignalIcon = (type: string) => {
    switch (type) {
      case 'bullish':
        return <TrendingUp className="w-4 h-4 text-success-500" />;
      case 'bearish':
        return <TrendingDown className="w-4 h-4 text-danger-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSignalColor = (type: string) => {
    switch (type) {
      case 'bullish':
        return 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400';
      case 'bearish':
        return 'bg-danger-100 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        AI Signals
      </h2>
      <div className="space-y-3">
        {signals.map((signal) => (
          <div
            key={signal.symbol}
            className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getSignalIcon(signal.type)}
                <span className="font-medium text-gray-900 dark:text-white">
                  {signal.symbol}
                </span>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${getSignalColor(
                  signal.type
                )}`}
              >
                {signal.type.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                <div
                  className={`h-2 rounded-full ${
                    signal.type === 'bullish'
                      ? 'bg-success-500'
                      : signal.type === 'bearish'
                      ? 'bg-danger-500'
                      : 'bg-gray-400'
                  }`}
                  style={{ width: `${signal.confidence}%` }}
                />
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {signal.confidence}% • {signal.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISignals;
