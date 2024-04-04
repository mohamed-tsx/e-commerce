const express = require("express");
const { PromoteToAdmin } = require("../Controllers/adminControllers");
const router = express.Router();

router.post("/promote-to-admin", PromoteToAdmin);

module.exports = router;
