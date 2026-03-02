/**
 * Blockchain network constants
 */

export const SUPPORTED_CHAINS = {
  LOCALHOST: 1337,
  SEPOLIA: 11155111,
  MAINNET: 1,
} as const;

export const RPC_URLS = {
  [SUPPORTED_CHAINS.LOCALHOST]: 'http://localhost:8545',
  [SUPPORTED_CHAINS.SEPOLIA]: 'https://sepolia.infura.io/v3/YOUR_KEY',
  [SUPPORTED_CHAINS.MAINNET]: 'https://mainnet.infura.io/v3/YOUR_KEY',
} as const;
