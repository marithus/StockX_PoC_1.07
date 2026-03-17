import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const RecentTrades: React.FC = () => {
  const trades = [
    { id: '1', symbol: 'AAPL', type: 'buy', price: 175.50, quantity: 10, time: '2 min ago' },
    { id: '2', symbol: 'TSLA', type: 'sell', price: 245.20, quantity: 5, time: '15 min ago' },
    { id: '3', symbol: 'MSFT', type: 'buy', price: 380.75, quantity: 8, time: '1 hour ago' },
    { id: '4', symbol: 'GOOGL', type: 'buy', price: 140.30, quantity: 3, time: '2 hours ago' },
  ];

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Recent Trades
      </h2>
      <div className="space-y-3">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-3">
              {trade.type === 'buy' ? (
                <div className="p-2 bg-success-100 dark:bg-success-900/30 rounded-lg">
                  <ArrowUpRight className="w-4 h-4 text-success-600 dark:text-success-400" />
                </div>
              ) : (
                <div className="p-2 bg-danger-100 dark:bg-danger-900/30 rounded-lg">
                  <ArrowDownRight className="w-4 h-4 text-danger-600 dark:text-danger-400" />
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {trade.symbol}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {trade.quantity} shares • {trade.time}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900 dark:text-white">
                ${trade.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {trade.type === 'buy' ? 'Buy' : 'Sell'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTrades;
