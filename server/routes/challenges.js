const ChallengeController = require('../controllers/challengeController');
const { authorizeByInitiator } = require('../middlewares/authorization');
const router = require('express').Router();

router.post('/', authorizeByInitiator, ChallengeController.createChallenge);

module.exports = router;