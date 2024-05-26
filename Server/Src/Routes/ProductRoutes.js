const express = require("express");
const { isAdmin } = require("../Middlewares/userAuthMiddleware");
const router = express.Router();
const Verify = require("../Utils/Verify");
const {
  addProduct,
  allProducts,
  deleteProduct,
} = require("../Controllers/ProductController");

router.post("/add", Verify, isAdmin, addProduct);
router.get("/allProducts", allProducts);
router.delete("/deleteProduct/:id", Verify, isAdmin, deleteProduct);

module.exports = router;
