const { Challenge } = require("../models");

class UserController {
    static async createChallenge(req, res, next) {
        try {
            const title = req.body.title;
            const brief = req.body.brief;
            const budget = +req.body.budget;
            let endDate = null;
            if (req.body.endDate) endDate = req.body.endDate;
            const UserId = +req.user.id;

            const data = await Challenge.create({
                title, brief, budget, endDate, UserId
            });

            res.status(201).json({
                message: "Success Create Challenge",
                data: { id: data.id, title: data.title, brief: data.brief, budget: data.budget, endDate: data.endDate }
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;