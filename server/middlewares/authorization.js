const authorizeByInitiator = async (req, res, next) => {
    try {
        if (req.user.role !== "Initiator") throw { code: 403, error: "Initiator role only!" };
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    authorizeByInitiator,
};