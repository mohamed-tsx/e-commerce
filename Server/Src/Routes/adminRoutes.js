const express = require("express");
const { PromoteToAdmin } = require("../Controllers/adminControllers");
const Verify = require("../Utils/Verify");
const router = express.Router();

router.post("/promote-to-admin", Verify, PromoteToAdmin);

module.exports = router;
