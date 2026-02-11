import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

const TradingGuides: React.FC = () => {
  const guides = [
    {
      title: 'Getting Started with Trading',
      description: 'Learn the basics of placing orders and executing trades on StockX',
      topics: ['Creating your first order', 'Understanding order types', 'Reading the order book'],
    },
    {
      title: 'Advanced Trading Strategies',
      description: 'Master sophisticated trading techniques and risk management',
      topics: ['Limit vs Market orders', 'Stop-loss strategies', 'Portfolio diversification'],
    },
    {
      title: 'Security Best Practices',
      description: 'Keep your account secure and protect your assets',
      topics: ['Wallet security', 'Two-factor authentication', 'Phishing prevention'],
    },
  ];

  return (
    <div className="card bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center space-x-3 mb-8"
      >
        <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Trading Guides
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Learn everything you need to know about trading
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {guides.map((guide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {guide.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {guide.description}
            </p>
            <ul className="space-y-2 mb-4">
              {guide.topics.map((topic, i) => (
                <li key={i} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-4 h-4 text-success-500" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform">
              <span className="text-sm">Read Guide</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TradingGuides;
