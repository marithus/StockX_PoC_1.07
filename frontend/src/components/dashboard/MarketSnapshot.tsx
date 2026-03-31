import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { api } from '@/services/api';

interface MarketData {
  activeTokens: number;
  lastUpdated: string;
}

const isMarketData = (value: unknown): value is MarketData => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.activeTokens === 'number' &&
    typeof candidate.lastUpdated === 'string'
  );
};

const MarketSnapshot: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null);

        const response = await api.get('/market/data');
        const payload = response.data as unknown;
        const nestedMarketData =
          payload && typeof payload === 'object'
            ? (payload as { marketData?: unknown }).marketData
            : undefined;
        const nextMarketData = isMarketData(nestedMarketData)
          ? nestedMarketData
          : payload;

        if (!isMarketData(nextMarketData)) {
          throw new Error('Invalid market snapshot data shape.');
        }

        setMarketData(nextMarketData);
      } catch {
        setErrorMessage('Unable to load market snapshot right now.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  const formattedLastUpdated =
    marketData?.lastUpdated
      ? new Date(marketData.lastUpdated).toLocaleString()
      : 'N/A';

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
            Market snapshot
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Live market status
          </p>
        </div>
        <Activity className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </motion.div>

      {isLoading ? (
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Loading market snapshot...
        </p>
      ) : errorMessage ? (
        <p className="text-sm text-danger-600 dark:text-danger-400">
          {errorMessage}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Active tokens
            </p>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              {marketData?.activeTokens ?? 'N/A'}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Last updated
            </p>
            <p className="mt-1 text-base font-medium text-gray-900 dark:text-white">
              {formattedLastUpdated}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MarketSnapshot;
