import React from 'react';

const CorrelationMatrix: React.FC = () => {
  const symbols = ['AAPL', 'MSFT', 'TSLA', 'GOOGL', 'AMZN'];
  const correlations = [
    [1.00, 0.85, 0.72, 0.88, 0.79],
    [0.85, 1.00, 0.68, 0.92, 0.81],
    [0.72, 0.68, 1.00, 0.65, 0.71],
    [0.88, 0.92, 0.65, 1.00, 0.84],
    [0.79, 0.81, 0.71, 0.84, 1.00],
  ];

  const getColor = (value: number) => {
    if (value >= 0.8) return 'bg-primary-600 text-white';
    if (value >= 0.6) return 'bg-primary-400 text-white';
    if (value >= 0.4) return 'bg-primary-200 text-gray-900';
    return 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white';
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Correlation Matrix
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400"></th>
              {symbols.map((symbol) => (
                <th key={symbol} className="py-2 px-3 text-center text-xs font-medium text-gray-600 dark:text-gray-400">
                  {symbol}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {symbols.map((symbol, i) => (
              <tr key={symbol} className="border-t border-gray-200 dark:border-gray-700">
                <td className="py-3 px-3 text-sm font-medium text-gray-900 dark:text-white">
                  {symbol}
                </td>
                {correlations[i].map((value, j) => (
                  <td
                    key={j}
                    className={`py-3 px-3 text-center text-sm font-medium ${getColor(value)}`}
                  >
                    {value.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CorrelationMatrix;
