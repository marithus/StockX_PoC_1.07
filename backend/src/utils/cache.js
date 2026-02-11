// Simple in-memory cache (in production, would use Redis)
class Cache {
  constructor() {
    this.data = new Map();
    this.ttl = new Map();
  }

  async get(key) {
    if (this.ttl.has(key) && this.ttl.get(key) < Date.now()) {
      this.data.delete(key);
      this.ttl.delete(key);
      return null;
    }
    return this.data.get(key) || null;
  }

  async set(key, value, ttlSeconds = 3600) {
    this.data.set(key, value);
    this.ttl.set(key, Date.now() + ttlSeconds * 1000);
  }

  async delete(key) {
    this.data.delete(key);
    this.ttl.delete(key);
  }

  async clear() {
    this.data.clear();
    this.ttl.clear();
  }

  async has(key) {
    if (this.ttl.has(key) && this.ttl.get(key) < Date.now()) {
      this.data.delete(key);
      this.ttl.delete(key);
      return false;
    }
    return this.data.has(key);
  }
}

const priceCache = new Cache();
const orderCache = new Cache();
const tokenCache = new Cache();

module.exports = {
  priceCache,
  orderCache,
  tokenCache,
};
