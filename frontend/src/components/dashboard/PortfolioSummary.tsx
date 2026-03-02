import React from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

const PortfolioSummary: React.FC = () => {
  const portfolio = {
    totalValue: 125430.50,
    totalCost: 100000.00,
    pnl: 25430.50,
    pnlPercentage: 25.43,
  };

  const holdings = [
    { symbol: 'AAPL', quantity: 10, value: 17500, pnl: 2500 },
    { symbol: 'TSLA', quantity: 5, value: 12500, pnl: -500 },
    { symbol: 'MSFT', quantity: 8, value: 32000, pnl: 8000 },
    { symbol: 'GOOGL', quantity: 3, value: 4200, pnl: 1200 },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Portfolio Summary
        </h2>
        <Wallet className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Total Portfolio Value
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            ${portfolio.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
          <div className="flex items-center mt-2">
            {portfolio.pnl >= 0 ? (
              <TrendingUp className="w-4 h-4 text-success-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-danger-500 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${
                portfolio.pnl >= 0
                  ? 'text-success-600 dark:text-success-400'
                  : 'text-danger-600 dark:text-danger-400'
              }`}
            >
              ${portfolio.pnl.toLocaleString('en-US', { minimumFractionDigits: 2 })} (
              {portfolio.pnl >= 0 ? '+' : ''}
              {portfolio.pnlPercentage}%)
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Holdings
          </p>
          {holdings.map((holding) => (
            <div
              key={holding.symbol}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {holding.symbol}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {holding.quantity} shares
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-white">
                  ${holding.value.toLocaleString()}
                </p>
                <p
                  className={`text-sm font-medium ${
                    holding.pnl >= 0
                      ? 'text-success-600 dark:text-success-400'
                      : 'text-danger-600 dark:text-danger-400'
                  }`}
                >
                  {holding.pnl >= 0 ? '+' : ''}${holding.pnl.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
