const express = require("express");
const { isAdmin } = require("../Middlewares/userAuthMiddleware");
const router = express.Router();
const Verify = require("../Utils/Verify");
const { addProduct, allProducts } = require("../Controllers/ProductController");

router.post("/add", Verify, isAdmin, addProduct);
router.get("/allProducts", allProducts);

module.exports = router;
