const router = require("express").Router();
const nodemailerControllers = require("../controllers/nodemailerControllers");

router.post("/send-mail-with-text", nodemailerControllers.sendEmailWithText);

module.exports = router;
