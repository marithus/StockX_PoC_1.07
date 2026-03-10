import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-900 dark:via-primary-800 dark:to-primary-900 p-12 md:p-16">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>24h Volume: $12.4M</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Decentralized Stock
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Exchange Platform
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
        >
          Trade tokenized equities with AI-powered insights, instant settlement, and institutional-grade security.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.button
            onClick={() => navigate('/trading')}
            className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Trading</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={() => navigate('/analytics')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 flex items-center space-x-2 text-lg border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Analytics</span>
          </motion.button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { icon: Zap, text: 'Instant Settlement', color: 'text-yellow-300' },
            { icon: Shield, text: 'Fully Compliant', color: 'text-green-300' },
            { icon: TrendingUp, text: 'AI-Powered', color: 'text-blue-300' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3 text-white/90"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className={`p-3 bg-white/10 backdrop-blur-sm rounded-lg ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
