// Type definitions (for documentation/reference)
// In JavaScript, types are inferred at runtime

const OrderStatus = {
  PENDING: 'pending',
  FILLED: 'filled',
  PARTIALLY_FILLED: 'partially-filled',
  CANCELLED: 'cancelled',
};

const OrderSide = {
  BUY: 'buy',
  SELL: 'sell',
};

const OrderType = {
  LIMIT: 'limit',
  MARKET: 'market',
  STOP: 'stop',
};

const TradeType = {
  BUY: 'buy',
  SELL: 'sell',
};

const ComplianceStatus = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  EXPIRED: 'expired',
};

module.exports = {
  OrderStatus,
  OrderSide,
  OrderType,
  TradeType,
  ComplianceStatus,
};
