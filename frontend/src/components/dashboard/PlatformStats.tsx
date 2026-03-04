import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Shield, Zap, Database, Globe } from 'lucide-react';

const PlatformStats: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Traders', value: '8,432', change: '+12.5%', color: 'text-blue-600' },
    { icon: TrendingUp, label: 'Total Volume', value: '$48.5B', change: '+24.3%', color: 'text-green-600' },
    { icon: Shield, label: 'Security Score', value: '99.9%', change: 'Audited', color: 'text-purple-600' },
    { icon: Zap, label: 'Avg. Settlement', value: '< 2s', change: 'Instant', color: 'text-yellow-600' },
    { icon: Database, label: 'Tokens Listed', value: '247', change: '+15', color: 'text-indigo-600' },
    { icon: Globe, label: 'Countries', value: '45+', change: 'Worldwide', color: 'text-red-600' },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Platform Statistics
        </h2>
        <p className="text-gray-400 text-lg">
          Real-time metrics from the StockX ecosystem
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
            >
              <motion.div
                className={`inline-flex p-4 rounded-full bg-white/10 mb-4 ${stat.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 mb-2">{stat.label}</p>
              <p className={`text-sm font-medium ${stat.color}`}>{stat.change}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformStats;
