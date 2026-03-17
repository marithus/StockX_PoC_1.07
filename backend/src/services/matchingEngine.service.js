const { matchingEngine } = require('../matching-engine/matchingEngine');
const { eventEmitter } = require('../events/eventEmitter');

const matchingEngineService = {
  async submitOrder(order) {
    try {
      // Validate order before submission
      if (!order.symbol || !order.side || !order.quantity) {
        throw new Error('Invalid order data');
      }

      // Submit to matching engine
      const result = await matchingEngine.addOrder(order);

      if (result.matched) {
        eventEmitter.emit('orders:matched', {
          buyOrder: result.buyOrder,
          sellOrder: result.sellOrder,
          trade: result.trade,
        });
      }

      return result;
    } catch (error) {
      console.error('Matching engine error:', error);
      throw error;
    }
  },

  async cancelOrder(orderId) {
    return await matchingEngine.removeOrder(orderId);
  },

  async getOrderBook(symbol) {
    return await matchingEngine.getOrderBook(symbol);
  },

  async getBestBidAsk(symbol) {
    return await matchingEngine.getBestBidAsk(symbol);
  },
};

module.exports = { matchingEngineService };
