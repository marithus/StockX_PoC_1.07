const { complianceModel } = require('../models/compliance.model');

const complianceService = {
  async checkCompliance(userId) {
    const compliance = await complianceModel.findOne({ userId });
    
    if (!compliance) {
      return {
        approved: false,
        reason: 'KYC not completed',
      };
    }

    if (!compliance.isApproved) {
      return {
        approved: false,
        reason: compliance.reason || 'KYC not approved',
      };
    }

    if (compliance.expiry && new Date(compliance.expiry) < new Date()) {
      return {
        approved: false,
        reason: 'Compliance expired',
      };
    }

    return {
      approved: true,
      jurisdiction: compliance.jurisdiction,
      expiry: compliance.expiry,
    };
  },

  async updateCompliance(userId, complianceData) {
    return await complianceModel.findOneAndUpdate(
      { userId },
      {
        ...complianceData,
        updatedAt: new Date(),
      },
      { upsert: true, new: true }
    );
  },

  async getComplianceStatus(userId) {
    return await complianceModel.findOne({ userId });
  },

  async whitelistAddress(address, status = true) {
    return await complianceModel.findOneAndUpdate(
      { address: address.toLowerCase() },
      { whitelisted: status, updatedAt: new Date() },
      { upsert: true, new: true }
    );
  },

  async isWhitelisted(address) {
    const compliance = await complianceModel.findOne({ 
      address: address.toLowerCase(),
      whitelisted: true,
    });
    return !!compliance;
  },
};

module.exports = { complianceService };
