const router = require('express').Router();
const routerUser = require('./users');
const errorHandler = require('../middlewares/errorHandler');
const { isLoggedIn } = require('../middlewares/authentication');

router.use("/users", routerUser);

router.use(isLoggedIn);

router.use(errorHandler);

module.exports = router;