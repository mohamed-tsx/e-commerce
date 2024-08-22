const express = require("express");
const { Register, Login, me } = require("../Controllers/userController");
const router = express.Router();
const Verify = require("../Utils/Verify");

router.post("/", Register);
router.post("/login", Login);
router.get("/me", Verify, me);

module.exports = router;
