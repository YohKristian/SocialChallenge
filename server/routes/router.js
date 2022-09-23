const router = require('express').Router();
const routerUser = require('./users');
const errorHandler = require('../middlewares/errorHandler');

router.use("/users", routerUser);

router.use(errorHandler);

module.exports = router;