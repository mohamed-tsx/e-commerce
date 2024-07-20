const express = require("express");
const {
  createOrder,
  getAllOrders,
  getSpecificOrder,
} = require("../Controllers/OrderController");
const Verify = require("../Utils/Verify");
const { isAdmin } = require("../Middlewares/userAuthMiddleware");
const router = express.Router();

router.post("/create", Verify, isAdmin, createOrder);
router.get("/all-orders", Verify, isAdmin, getAllOrders);
router.get("/:id", Verify, isAdmin, getSpecificOrder);

module.exports = router;
