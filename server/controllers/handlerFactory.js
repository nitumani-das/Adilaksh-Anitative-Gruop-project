const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const sendResponse = require('../utils/apiResponse');

/**
 * Generic CRUD handlers for simple Mongoose models (Category, Certificate,
 * Gallery, Subscriber, etc). Model-specific controllers (Product, Lead, Blog)
 * extend or bypass this where custom logic (search, filters, emails) is needed.
 */
const getAll = (Model, { populate, defaultSort = '-createdAt' } = {}) =>
  asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    let query = Model.find();
    if (populate) query = query.populate(populate);
    query = query.sort(defaultSort).skip(skip).limit(limit);

    const [items, total] = await Promise.all([query, Model.countDocuments()]);

    sendResponse(res, 200, `${Model.modelName} list fetched`, items, {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  });

const getOne = (Model, { populate } = {}) =>
  asyncHandler(async (req, res) => {
    let query = Model.findById(req.params.id);
    if (populate) query = query.populate(populate);
    const doc = await query;
    if (!doc) throw new ApiError(404, `${Model.modelName} not found`);
    sendResponse(res, 200, `${Model.modelName} fetched`, doc);
  });

const createOne = (Model) =>
  asyncHandler(async (req, res) => {
    const doc = await Model.create(req.body);
    sendResponse(res, 201, `${Model.modelName} created`, doc);
  });

const updateOne = (Model) =>
  asyncHandler(async (req, res) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) throw new ApiError(404, `${Model.modelName} not found`);
    sendResponse(res, 200, `${Model.modelName} updated`, doc);
  });

const deleteOne = (Model) =>
  asyncHandler(async (req, res) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) throw new ApiError(404, `${Model.modelName} not found`);
    sendResponse(res, 200, `${Model.modelName} deleted`);
  });

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };
