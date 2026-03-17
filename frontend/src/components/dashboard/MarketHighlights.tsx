import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Activity } from 'lucide-react';

const MarketHighlights: React.FC = () => {
  const highlights = [
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.20, change: 5.67, volume: '45.2M' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 485.50, change: 8.3, volume: '32.1M' },
    { symbol: 'AMD', name: 'AMD Inc.', price: 142.30, change: 6.7, volume: '28.5M' },
    { symbol: 'META', name: 'Meta Platforms', price: 320.80, change: 5.2, volume: '25.8M' },
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.50, change: 2.34, volume: '67.4M' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 380.75, change: -1.23, volume: '54.2M' },
  ];

  return (
    <div className="card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            Market Highlights
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Top performing stocks today
          </p>
        </div>
        <Activity className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((stock, index) => (
          <motion.div
            key={stock.symbol}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {stock.symbol}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {stock.name}
                </p>
              </div>
              {stock.change >= 0 ? (
                <div className="flex items-center space-x-1 text-success-600 dark:text-success-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+{stock.change}%</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 text-danger-600 dark:text-danger-400">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm font-medium">{stock.change}%</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${stock.price.toFixed(2)}
              </span>
              <div className="text-right">
                <p className="text-xs text-gray-600 dark:text-gray-400">Volume</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{stock.volume}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketHighlights;
