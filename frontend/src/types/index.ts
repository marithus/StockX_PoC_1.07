export interface TokenizedStock {
  symbol: string;
  name: string;
  address: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  totalSupply: number;
  logo?: string;
}

export interface Order {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  orderType: 'limit' | 'market' | 'stop';
  price: number;
  quantity: number;
  status: 'pending' | 'filled' | 'cancelled' | 'partially-filled';
  timestamp: number;
  userId: string;
}

export interface Trade {
  id: string;
  symbol: string;
  price: number;
  quantity: number;
  buyer: string;
  seller: string;
  timestamp: number;
  txHash: string;
}

export interface Portfolio {
  totalValue: number;
  totalCost: number;
  pnl: number;
  pnlPercentage: number;
  holdings: Holding[];
}

export interface Holding {
  symbol: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  value: number;
  pnl: number;
  pnlPercentage: number;
}

export interface AISignal {
  id: string;
  symbol: string;
  type: 'bullish' | 'bearish' | 'neutral';
  confidence: number;
  source: string;
  timestamp: number;
  description: string;
}

export interface MarketData {
  symbol: string;
  price: number;
  volume: number;
  high24h: number;
  low24h: number;
  change24h: number;
  timestamp: number;
}

export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  proposer: string;
  status: 'active' | 'passed' | 'rejected' | 'executed';
  votesFor: number;
  votesAgainst: number;
  startTime: number;
  endTime: number;
}
