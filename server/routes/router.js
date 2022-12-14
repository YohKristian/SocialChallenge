const router = require('express').Router();
const routerUser = require('./users');
const routerChallenge = require('./challenges');
const routerSubmission = require('./submissions');
const errorHandler = require('../middlewares/errorHandler');
const { isLoggedIn } = require('../middlewares/authentication');

router.use("/users", routerUser);

router.use(isLoggedIn);

router.use("/challenges", routerChallenge);
router.use("/submission", routerSubmission);

router.use(errorHandler);

module.exports = router;