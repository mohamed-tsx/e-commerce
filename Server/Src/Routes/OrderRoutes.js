const express = require("express");
const {
  createOrder,
  getAllOrders,
  getSpecificOrder,
  acceptPayment,
  acceptOrder,
  acceptedOrders,
} = require("../Controllers/OrderController");
const Verify = require("../Utils/Verify");
const { isAdmin } = require("../Middlewares/userAuthMiddleware");
const router = express.Router();

router.post("/create", Verify, isAdmin, createOrder);
router.get("/all-orders", Verify, isAdmin, getAllOrders);
router.get("/:id", Verify, isAdmin, getSpecificOrder);
router.put("/accept-payment/:id", Verify, isAdmin, acceptPayment);
router.put("/accept-order/:id", Verify, isAdmin, acceptOrder);
router.get("/acceptedOrders", Verify, isAdmin, acceptedOrders);

module.exports = router;
