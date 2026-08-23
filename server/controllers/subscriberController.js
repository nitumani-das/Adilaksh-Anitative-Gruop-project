const Subscriber = require('../models/Subscriber');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const sendResponse = require('../utils/apiResponse');
const factory = require('./handlerFactory');

// @desc    Subscribe an email to the newsletter (idempotent)
// @route   POST /api/subscribers
// @access  Public
const subscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const existing = await Subscriber.findOne({ email });

  if (existing) {
    if (!existing.isActive) {
      existing.isActive = true;
      await existing.save();
    }
    return sendResponse(res, 200, 'You are subscribed to our newsletter');
  }

  await Subscriber.create({ email });
  sendResponse(res, 201, 'Subscribed successfully');
});

// @desc    Unsubscribe
// @route   POST /api/subscribers/unsubscribe
// @access  Public
const unsubscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const subscriber = await Subscriber.findOneAndUpdate({ email }, { isActive: false });
  if (!subscriber) throw new ApiError(404, 'Email not found in subscriber list');
  sendResponse(res, 200, 'Unsubscribed successfully');
});

module.exports = {
  subscribe,
  unsubscribe,
  getSubscribers: factory.getAll(Subscriber),
  deleteSubscriber: factory.deleteOne(Subscriber),
};
