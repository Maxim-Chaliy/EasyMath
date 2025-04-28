const express = require('express');
const { register, login, confirmEmail } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/confirm-email', confirmEmail);

module.exports = router;
