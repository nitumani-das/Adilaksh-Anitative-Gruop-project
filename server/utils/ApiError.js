/**
 * Standardized operational error used across controllers/services.
 * Thrown errors carry an HTTP status code so the global error handler
 * can respond consistently without guessing.
 */
class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
