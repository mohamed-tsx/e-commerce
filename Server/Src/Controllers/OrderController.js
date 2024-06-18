const asyncHandler = require("express-async-handler");

const createOrder = asyncHandler(async (req, res) => {
  const { totalPrice, items, email, address, shippingMethod, phoneNumber } =
    req.body;
});
