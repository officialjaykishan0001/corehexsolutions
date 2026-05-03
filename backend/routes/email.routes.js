const express = require("express");
const { emailSender} = require('../controllers/email.controller');

const router = express.Router();

router.post('/send', emailSender);


module.exports = router;
