const express = require("express");
const { isAdmin } = require("../Middlewares/userAuthMiddleware");
const router = express.Router();
const Verify = require("../Utils/Verify");
const { addProduct } = require("../Controllers/ProductController");

router.post("/add", Verify, isAdmin, addProduct);

module.exports = router;
