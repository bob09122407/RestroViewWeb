const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
    // Default to 500 Internal Server Error
    let statusCode = 500;

    if (err.code === 11000) {
        // Duplicate key error
        statusCode = 400;
    } else if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
        // JWT errors
        statusCode = 401; // Unauthorized
    }

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal server error",
    });
};
