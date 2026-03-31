import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Shield, Zap, Globe, Lock, Users, Target, Award, TrendingUp as TrendingUpIcon } from 'lucide-react';
import MarketOverview from './MarketOverview';
import PortfolioSummary from './PortfolioSummary';
import RecentTrades from './RecentTrades';
import AISignals from './AISignals';
import MarketSnapshot from './MarketSnapshot';
import ScrollAnimation from '../common/ScrollAnimation';
import HeroSection from './HeroSection';
import FeatureShowcase from './FeatureShowcase';
import MarketHighlights from './MarketHighlights';
import PlatformStats from './PlatformStats';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

const Dashboard: React.FC = () => {
  const stats = [
    {
      label: 'Total Volume',
      value: '$12.4M',
      change: '+12.5%',
      trend: 'up' as const,
      icon: DollarSign,
    },
    {
      label: 'Active Users',
      value: '8,432',
      change: '+8.2%',
      trend: 'up' as const,
      icon: BarChart3,
    },
    {
      label: 'Tokens Listed',
      value: '247',
      change: '+5',
      trend: 'up' as const,
      icon: TrendingUp,
    },
    {
      label: '24h Change',
      value: '+2.34%',
      change: '-0.12%',
      trend: 'down' as const,
      icon: TrendingDown,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats */}
      <ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-2">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-success-500 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-danger-500 mr-1" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          stat.trend === 'up'
                            ? 'text-success-600 dark:text-success-400'
                            : 'text-danger-600 dark:text-danger-400'
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollAnimation>

      {/* Market Highlights */}
      <ScrollAnimation delay={0.2}>
        <MarketHighlights />
      </ScrollAnimation>

      {/* Market Snapshot */}
      <ScrollAnimation delay={0.25}>
        <MarketSnapshot />
      </ScrollAnimation>

      {/* Main Content Grid */}
      <ScrollAnimation delay={0.3}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MarketOverview />
          </div>
          <div>
            <AISignals />
          </div>
        </div>
      </ScrollAnimation>

      {/* Portfolio & Trades */}
      <ScrollAnimation delay={0.4}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PortfolioSummary />
          <RecentTrades />
        </div>
      </ScrollAnimation>

      {/* Feature Showcase */}
      <ScrollAnimation delay={0.5}>
        <FeatureShowcase />
      </ScrollAnimation>

      {/* Platform Stats */}
      <ScrollAnimation delay={0.6}>
        <PlatformStats />
      </ScrollAnimation>

      {/* Testimonials */}
      <ScrollAnimation delay={0.7}>
        <TestimonialsSection />
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation delay={0.8}>
        <CTASection />
      </ScrollAnimation>
    </div>
  );
};

export default Dashboard;
