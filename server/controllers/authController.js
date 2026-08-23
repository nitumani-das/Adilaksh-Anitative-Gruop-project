const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const sendResponse = require('../utils/apiResponse');
const User = require('../models/User');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });

const setTokenCookie = (res, token) => {
  const days = Number(process.env.COOKIE_EXPIRES_DAYS) || 7;
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: days * 24 * 60 * 60 * 1000,
  });
};

// @desc    Register a new admin/staff user (first user or invited by super_admin)
// @route   POST /api/auth/register
// @access  Private (super_admin only) — enforced in routes
const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  const existing = await User.findOne({ email });
  if (existing) throw new ApiError(409, 'A user with this email already exists');

  const user = await User.create({ name, email, password, role });
  const token = signToken(user._id);
  setTokenCookie(res, token);

  sendResponse(res, 201, 'User registered successfully', {
    user: user.toSafeObject(),
    token,
  });
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw new ApiError(401, 'Invalid email or password');
  }
  if (!user.isActive) throw new ApiError(403, 'This account has been deactivated');

  user.lastLogin = new Date();
  await user.save();

  const token = signToken(user._id);
  setTokenCookie(res, token);

  sendResponse(res, 200, 'Login successful', {
    user: user.toSafeObject(),
    token,
  });
});

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
const logout = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  sendResponse(res, 200, 'Logged out successfully');
});

// @desc    Get currently authenticated user
// @route   GET /api/auth/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  sendResponse(res, 200, 'Current user fetched', { user: req.user.toSafeObject() });
});

module.exports = { register, login, logout, getMe };
