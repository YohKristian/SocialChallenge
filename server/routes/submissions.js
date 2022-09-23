const SubmissionController = require('../controllers/submissionController');
const { authorizeByParticipant } = require('../middlewares/authorization');
const router = require('express').Router();

router.post('/:challengeId', authorizeByParticipant, SubmissionController.registerChallenge);

module.exports = router;