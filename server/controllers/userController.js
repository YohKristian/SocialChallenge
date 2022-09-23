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
}

module.exports = UserController;