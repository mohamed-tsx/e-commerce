const express = require("express");
const { PromoteToAdmin } = require("../Controllers/adminControllers");
const Verify = require("../Utils/Verify");
const { isAdmin } = require("../Middlewares/userAuthMiddleware");
const router = express.Router();

router.post("/promote-to-admin/:id", Verify, isAdmin, PromoteToAdmin);

module.exports = router;
