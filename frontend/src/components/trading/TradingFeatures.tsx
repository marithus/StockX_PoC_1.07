import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp, Clock, BarChart3, Bot } from 'lucide-react';

const TradingFeatures: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Execution',
      description: 'Orders execute in milliseconds with our high-performance matching engine',
    },
    {
      icon: Shield,
      title: 'Secure Settlement',
      description: 'Atomic blockchain settlement eliminates counterparty risk completely',
    },
    {
      icon: TrendingUp,
      title: 'Advanced Orders',
      description: 'Support for limit, market, stop-loss, and conditional orders',
    },
    {
      icon: Clock,
      title: 'Real-Time Data',
      description: 'Live price feeds and order book updates with zero latency',
    },
    {
      icon: BarChart3,
      title: 'Market Analytics',
      description: 'Built-in technical indicators and charting tools for analysis',
    },
    {
      icon: Bot,
      title: 'AI Assistance',
      description: 'Get intelligent trade suggestions powered by machine learning',
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Trading Features
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Everything you need for professional-grade trading
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card group cursor-pointer"
            >
              <motion.div
                className="inline-flex p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TradingFeatures;
