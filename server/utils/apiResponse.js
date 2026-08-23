/**
 * Sends a consistently shaped success response across all endpoints,
 * so the frontend's API layer can rely on one response contract.
 */
const sendResponse = (res, statusCode, message, data = null, meta = null) => {
  const payload = { success: true, message };
  if (data !== null) payload.data = data;
  if (meta !== null) payload.meta = meta;
  return res.status(statusCode).json(payload);
};

module.exports = sendResponse;
