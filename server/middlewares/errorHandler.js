function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.name === "SequelizeUniqueConstraintError" || error.name === "SequelizeValidationError") {
        const errors = error.errors.map(err => err.message);
        res.status(400).json({
            message: "Bad Request",
            error: errors
        })
    } else {
        res.status(500).json({
            message: "Internal Server Error",
            error: error
        })
    }
}

module.exports = errorHandler;