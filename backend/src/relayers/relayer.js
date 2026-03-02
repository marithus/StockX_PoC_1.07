const { ethers } = require('ethers');
const { config } = require('../config/config');

class Relayer {
  constructor() {
    this.provider = null;
    this.wallet = null;
    this.isInitialized = false;
  }

  async initialize() {
    if (this.isInitialized) return;

    try {
      if (config.rpcUrl) {
        this.provider = new ethers.JsonRpcProvider(config.rpcUrl);
        
        if (config.privateKey) {
          this.wallet = new ethers.Wallet(config.privateKey, this.provider);
        }
      }

      this.isInitialized = true;
      console.log('✅ Relayer initialized');
    } catch (error) {
      console.error('Relayer initialization error:', error);
    }
  }

  async submitTrade(tradeData) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    if (!this.wallet) {
      throw new Error('Relayer wallet not configured');
    }

    try {
      // In production, this would call the smart contract
      // For now, just return a mock transaction hash
      const txHash = `0x${Date.now().toString(16)}${Math.random().toString(16).substr(2)}`;
      
      console.log('Trade submitted to blockchain:', {
        trade: tradeData,
        txHash,
      });

      return {
        success: true,
        txHash,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Trade submission error:', error);
      throw error;
    }
  }

  async verifyOrderSignature(order, signature) {
    try {
      // Verify signature using ethers
      const message = JSON.stringify(order);
      const recoveredAddress = ethers.verifyMessage(message, signature);
      
      return recoveredAddress.toLowerCase() === order.userAddress.toLowerCase();
    } catch (error) {
      console.error('Signature verification error:', error);
      return false;
    }
  }

  async getTransactionStatus(txHash) {
    if (!this.provider) {
      return { status: 'unknown' };
    }

    try {
      const receipt = await this.provider.getTransactionReceipt(txHash);
      return {
        status: receipt ? 'confirmed' : 'pending',
        blockNumber: receipt?.blockNumber,
        confirmations: receipt ? 1 : 0,
      };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }
}

const relayer = new Relayer();

module.exports = { Relayer, relayer };
