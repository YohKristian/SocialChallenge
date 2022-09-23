const SubmissionController = require('../controllers/submissionController');
const router = require('express').Router();

router.post('/:challengeId', SubmissionController.registerChallenge);

module.exports = router;