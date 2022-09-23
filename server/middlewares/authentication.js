const { verifyToken } = require("../helpers/jsonwebtoken.js");
const { User } = require("../models");

const isLoggedIn = async (req, res, next) => {
    try {
        let access_token = req.headers.access_token;
        if (!access_token) throw { code: 401, error: "Please login" };

        let payload = verifyToken(access_token);

        let user = await User.findByPk(payload.id);
        if (!user) throw { name: "Unauthorized", error: "User not found" };

        req.user = {
            id: user.id,
            username: user.username,
            role: user.role
        }

        next();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    isLoggedIn
};