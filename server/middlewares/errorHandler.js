function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.name === "SequelizeUniqueConstraintError" || error.name === "SequelizeValidationError") {
        const errors = error.errors.map(err => err.message);
        res.status(400).json({
            message: "Bad Request",
            error: errors
        })
    } else if (error.code === 400) {
        res.status(400).json({
            message: "Bad Request",
            error: error.error
        })
    } else if (error.name === "Unauthorized" || error.name === "JsonWebTokenError") {
        res.status(401).json({
            message: "Invalid Token",
            error: error.error
        })
    } else if (error.code === 401) {
        res.status(401).json({
            message: "Unauthorized",
            error: error.error
        })
    } else {
        res.status(500).json({
            message: "Internal Server Error",
            error: error
        })
    }
}

module.exports = errorHandler;