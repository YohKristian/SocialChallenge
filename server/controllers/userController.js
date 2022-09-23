const { comparePassword } = require("../helpers/bcryptjs");
const { createToken } = require("../helpers/jsonwebtoken");
const { User } = require("../models");

class UserController {
    static async adminRegister(req, res, next) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const role = "Admin";

            const data = await User.create({
                username, password, role
            });

            res.status(201).json({
                message: "Success Register Admin",
                data: { id: data.id, username: data.username, role: data.role }
            });
        } catch (error) {
            next(error);
        }
    }

    static async participantRegister(req, res, next) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const role = "Participant";

            const data = await User.create({
                username, password, role
            });

            res.status(201).json({
                message: "Success Register Participant",
                data: { id: data.id, username: data.username, role: data.role }
            });
        } catch (error) {
            next(error);
        }
    }

    static async initiatorRegister(req, res, next) {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const role = "Initiator";

            const data = await User.create({
                username, password, role
            });

            res.status(201).json({
                message: "Success Register Initiator",
                data: { id: data.id, username: data.username, role: data.role }
            });
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const username = req.body.username;
            const password = req.body.password;

            if (!username) throw { code: 400, error: "Input email" };
            if (!password) throw { code: 400, error: "Input password" };

            const user = await User.findOne({
                where: {
                    username
                }
            });

            if (!user) throw { code: 401, error: "Invalid email / password" };

            const validatePass = comparePassword(password, user.password);

            if (!validatePass) throw { code: 401, error: "Invalid email / password" };

            const payload = {
                id: user.id
            };

            const access_token = createToken(payload);

            res.status(200).json({
                access_token
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;