const asyncHandler = require("express-async-handler");
const Prisma = require("../Config/Prisma");

const createOrder = asyncHandler(async (req, res) => {
  const { totalPrice, items, email, address, shippingMethod, phoneNumber } =
    req.body;

  // Validate the order
  if (
    !(
      totalPrice &&
      items &&
      items.length > 0 &&
      address &&
      shippingMethod &&
      phoneNumber &&
      email
    )
  ) {
    res.status(403);
    throw new Error("Your order isn't complete");
  }

  try {
    const productIds = items.map((item) => item.id);
    const existingProducts = await Prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    // Check if all products exist
    const existingProductIds = existingProducts.map((product) => product.id);
    const missingProducts = productIds.filter(
      (productId) => !existingProductIds.includes(productId)
    );
    if (missingProducts.length > 0) {
      res.status(404);
      throw new Error(`Some products in the order are not available.`);
    }
    // Create a new order
    const newOrder = await Prisma.order.create({
      data: {
        total: totalPrice,
        email,
        address,
        shippingMethod,
        phoneNumber,
        items: {
          create: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        },
      },
      include: {
        items: true, // Optionally include items in the response
      },
    });

    res
      .status(201)
      .json({ message: "Order is created succesfully", order: newOrder });
  } catch (error) {
    console.error(error);
    throw new Error(error);
    res.status(500).json({ message: "Failed to create order" });
  }
});

module.exports = {
  createOrder,
};
