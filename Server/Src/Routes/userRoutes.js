const express = require("express");
const { Register } = require("../Controllers/userController");
const router = express.Router();

router.post("/", Register);

module.exports = router;
