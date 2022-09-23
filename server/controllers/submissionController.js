const { Submission, SubmissionStat, sequelize } = require("../models");

class SubmissionController {
    static async registerChallenge(req, res, next) {
        let t = await sequelize.transaction();
        try {
            const ChallengeId = +req.params.challengeId;

            const UserId = +req.user.id;
            const url = req.body.url;

            const data = await Submission.create({
                UserId, ChallengeId, url
            }, { transaction: t });

            const view = (Math.floor(Math.random() * 10000) + 1);
            const like = (Math.floor(Math.random() * 1000) + 1);
            const comment = (Math.floor(Math.random() * 100) + 1);

            await SubmissionStat.create({
                view, like, comment, SubmissionId: data.id
            }, { transaction: t });

            await t.commit();
            res.status(201).json({
                message: "Success Create Submission",
                data: { url: data.url }
            });
        } catch (error) {
            await t.rollback();
            next(error);
        }
    }
}

module.exports = SubmissionController;