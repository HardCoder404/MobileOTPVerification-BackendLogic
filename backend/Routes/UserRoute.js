const express = require('express');
const { sendOtp } = require('../Controllers/userController');
const router = express.Router();

router.use(express.json());

router.post('/send-otp',sendOtp);

module.exports = router;