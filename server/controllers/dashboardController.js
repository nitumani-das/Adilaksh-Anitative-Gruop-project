const Product = require('../models/Product');
const Blog = require('../models/Blog');
const Lead = require('../models/Lead');
const Subscriber = require('../models/Subscriber');
const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/apiResponse');
const { LEAD_STATUS } = require('../config/constants');

// @desc    Aggregate counts for the admin dashboard overview
// @route   GET /api/dashboard/stats
// @access  Private (admin)
const getStats = asyncHandler(async (req, res) => {
  const [productCount, blogCount, leadCount, subscriberCount, newLeadCount, recentLeads] =
    await Promise.all([
      Product.countDocuments(),
      Blog.countDocuments(),
      Lead.countDocuments(),
      Subscriber.countDocuments({ isActive: true }),
      Lead.countDocuments({ status: LEAD_STATUS.NEW }),
      Lead.find().sort('-createdAt').limit(5),
    ]);

  sendResponse(res, 200, 'Dashboard stats fetched', {
    productCount,
    blogCount,
    leadCount,
    subscriberCount,
    newLeadCount,
    recentLeads,
  });
});

module.exports = { getStats };
