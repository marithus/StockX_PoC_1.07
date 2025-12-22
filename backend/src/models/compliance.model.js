// Compliance model
const complianceModel = {
  async findOne(query) {
    // Mock compliance data
    if (query.userId || query.address) {
      return {
        userId: query.userId,
        address: query.address,
        isApproved: true,
        whitelisted: true,
        jurisdiction: 'US',
        expiry: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        approvedAt: new Date(),
      };
    }
    return null;
  },

  async findOneAndUpdate(query, update, options) {
    const compliance = await this.findOne(query);
    return compliance ? { ...compliance, ...update } : update;
  },
};

module.exports = { complianceModel };
