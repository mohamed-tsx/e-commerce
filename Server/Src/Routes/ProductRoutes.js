const express = require("express");
const { isAdmin } = require("../Middlewares/userAuthMiddleware");
const router = express.Router();
const Verify = require("../Utils/Verify");
const {
  addProduct,
  allProducts,
  deleteProduct,
  oneProduct,
} = require("../Controllers/ProductController");

router.post("/add", Verify, isAdmin, addProduct);
router.get("/allProducts", allProducts);
router.delete("/deleteProduct/:id", Verify, isAdmin, deleteProduct);
router.get("/:id", Verify, oneProduct);

module.exports = router;
