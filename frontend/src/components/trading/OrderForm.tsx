import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';
import toast from 'react-hot-toast';

interface OrderFormProps {
  symbol: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ symbol }) => {
  const { isConnected } = useWallet();
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [orderMode, setOrderMode] = useState<'limit' | 'market'>('limit');
  const [price, setPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [total, setTotal] = useState<string>('0.00');

  const currentPrice = 175.50; // Mock price

  React.useEffect(() => {
    if (orderMode === 'market' && quantity) {
      setTotal((parseFloat(quantity) * currentPrice).toFixed(2));
    } else if (price && quantity) {
      setTotal((parseFloat(price) * parseFloat(quantity)).toFixed(2));
    } else {
      setTotal('0.00');
    }
  }, [price, quantity, orderMode, currentPrice]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (!quantity || parseFloat(quantity) <= 0) {
      toast.error('Please enter a valid quantity');
      return;
    }

    if (orderMode === 'limit' && (!price || parseFloat(price) <= 0)) {
      toast.error('Please enter a valid price');
      return;
    }

    toast.success(`${orderType === 'buy' ? 'Buy' : 'Sell'} order placed successfully!`);
    // Reset form
    setPrice('');
    setQuantity('');
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Place Order
      </h2>

      {/* Buy/Sell Toggle */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          onClick={() => setOrderType('buy')}
          className={`flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-all duration-200 ${
            orderType === 'buy'
              ? 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400 border-2 border-success-500'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <ArrowUpRight className="w-5 h-5" />
          <span>Buy</span>
        </button>
        <button
          onClick={() => setOrderType('sell')}
          className={`flex items-center justify-center space-x-2 py-3 rounded-lg font-medium transition-all duration-200 ${
            orderType === 'sell'
              ? 'bg-danger-100 dark:bg-danger-900/30 text-danger-700 dark:text-danger-400 border-2 border-danger-500'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <ArrowDownRight className="w-5 h-5" />
          <span>Sell</span>
        </button>
      </div>

      {/* Order Mode Toggle */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setOrderMode('limit')}
          className={`flex-1 py-2 rounded-lg font-medium transition-all duration-200 ${
            orderMode === 'limit'
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}
        >
          Limit
        </button>
        <button
          onClick={() => setOrderMode('market')}
          className={`flex-1 py-2 rounded-lg font-medium transition-all duration-200 ${
            orderMode === 'market'
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}
        >
          Market
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {orderMode === 'limit' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price (USD)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder={currentPrice.toFixed(2)}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Market price: ${currentPrice.toFixed(2)}
            </p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quantity
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="0.00"
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Total</span>
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4 text-gray-500" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {parseFloat(total).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isConnected}
          className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
            orderType === 'buy'
              ? 'bg-success-600 hover:bg-success-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed'
              : 'bg-danger-600 hover:bg-danger-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed'
          }`}
        >
          {orderType === 'buy' ? 'Buy' : 'Sell'} {symbol}
        </button>

        {!isConnected && (
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Please connect your wallet to place orders
          </p>
        )}
      </form>
    </div>
  );
};

export default OrderForm;
