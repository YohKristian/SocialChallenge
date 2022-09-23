const UserController = require('../controllers/userController');
const router = require('express').Router();

router.post('/admin', UserController.adminRegister);
router.post('/participant', UserController.participantRegister);
router.post('/initiator', UserController.initiatorRegister);
router.post('/login', UserController.login);

module.exports = router;