const Settings = require('../models/Settings');
const asyncHandler = require('../utils/asyncHandler');
const sendResponse = require('../utils/apiResponse');

// @desc    Get site settings (creates default doc on first call)
// @route   GET /api/settings
// @access  Public
const getSettings = asyncHandler(async (req, res) => {
  let settings = await Settings.findOne();
  if (!settings) settings = await Settings.create({});
  sendResponse(res, 200, 'Settings fetched', settings);
});

// @desc    Update site settings
// @route   PUT /api/settings
// @access  Private (admin)
const updateSettings = asyncHandler(async (req, res) => {
  let settings = await Settings.findOne();
  if (!settings) {
    settings = await Settings.create(req.body);
  } else {
    Object.assign(settings, req.body);
    await settings.save();
  }
  sendResponse(res, 200, 'Settings updated', settings);
});

module.exports = { getSettings, updateSettings };
