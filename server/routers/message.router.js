const express = require("express");
const { sendMessage } = require("../controllers/message.controller");

const router = express.Router();

router.post('/send', sendMessage); // Assuming sendMessage is a function defined in message.controller

module.exports = router; // Export the router directly

