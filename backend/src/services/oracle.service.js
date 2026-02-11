const { ethers } = require('ethers');
const { config } = require('../config/config');

const oracleService = {
  provider: null,

  initialize() {
    if (config.rpcUrl) {
      this.provider = new ethers.JsonRpcProvider(config.rpcUrl);
    }
  },

  async getCurrentPrice(symbol) {
    // In production, this would query Chainlink or other oracle
    // Mock data for now
    const mockPrices = {
      AAPL: 175.50,
      MSFT: 380.75,
      TSLA: 245.20,
      GOOGL: 140.30,
      AMZN: 145.80,
    };

    return mockPrices[symbol] || 0;
  },

  async getPriceHistory(symbol, period = '24h') {
    // Mock price history
    const basePrice = await this.getCurrentPrice(symbol);
    const hours = period === '24h' ? 24 : period === '7d' ? 168 : 720;
    const history = [];

    for (let i = hours; i >= 0; i--) {
      const timestamp = new Date(Date.now() - i * 60 * 60 * 1000);
      const variance = (Math.random() - 0.5) * 0.02; // ±1% variance
      const price = basePrice * (1 + variance);

      history.push({
        timestamp: timestamp.toISOString(),
        price: parseFloat(price.toFixed(2)),
        volume: Math.floor(Math.random() * 100000),
      });
    }

    return history;
  },

  async validatePrice(symbol, price, threshold = 0.05) {
    const oraclePrice = await this.getCurrentPrice(symbol);
    const deviation = Math.abs(price - oraclePrice) / oraclePrice;

    return {
      valid: deviation <= threshold,
      oraclePrice,
      deviation,
      threshold,
    };
  },
};

// Initialize on load
oracleService.initialize();

module.exports = { oracleService };
