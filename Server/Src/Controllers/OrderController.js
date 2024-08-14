const asyncHandler = require("express-async-handler");
const Prisma = require("../Config/Prisma");

const createOrder = asyncHandler(async (req, res) => {
  const {
    totalPrice,
    fullName,
    items,
    email,
    address,
    shippingMethod,
    phoneNumber,
  } = req.body;

  // Validate the order
  if (
    !(
      totalPrice &&
      fullName &&
      items &&
      items.length > 0 &&
      address &&
      shippingMethod &&
      phoneNumber &&
      email
    )
  ) {
    // Throwing an error here, the asyncHandler will catch it
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
      throw new Error(`Some products in the order are not available.`);
    }

    // Check if any products are out of stock
    const outOfStockProducts = items.filter((item) => {
      const product = existingProducts.find((p) => p.id === item.id);
      return product.quantity < item.quantity;
    });

    if (outOfStockProducts.length > 0) {
      throw new Error("Some products are out of stock.");
    }

    // Create a new order
    const newOrder = await Prisma.order.create({
      data: {
        total: totalPrice,
        name: fullName,
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

    res.status(201).json({
      success: true,
      message: "Order is created successfully",
      order: newOrder,
    });
  } catch (error) {
    // Handle the thrown error by sending an appropriate response
    res.status(500).json({ message: error.message });
    // Optionally, you can log the error or perform other actions here
  }
});

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Prisma.order.findMany({
    include: {
      items: {
        select: {
          product: true,
          orderId: true,
          productId: true,
          quantity: true,
        },
      },
    },
  });
  res.status(200).json({ success: true, orders: orders });
});

const getSpecificOrder = asyncHandler(async (req, res) => {
  // Fetch Id from request parameters
  const { id } = req.params;

  // Search an order which have the same id
  const order = await Prisma.order.findUnique({
    where: {
      id: id,
    },
    include: {
      items: {
        select: {
          product: true,
          orderId: true,
          productId: true,
          quantity: true,
        },
      },
    },
  });

  // If this order doesn't exist return error response
  if (!order) {
    throw new Error("Order not found");
  }

  // If this order exists return success response
  res.status(200).json({
    success: true,
    order,
  });
});

const acceptPayment = asyncHandler(async (req, res) => {
  // Fecth order id from request parameters
  const { id } = req.params;

  try {
    // Check if order exists
    const existingOrder = await Prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        items: true,
      },
    });

    // if order doesn't exist then throw an error
    if (!existingOrder) {
      res.status(404);
      throw new Error("Order not found");
    }

    // If Order exists start the process of accepting payments

    const updatedOrder = await Prisma.order.update({
      where: { id },
      data: {
        paymentStatus: "PAID",
        orderStatus: existingOrder.orderStatus,
      },
    });

    res.status(200).json({
      success: true,
      message: "Payment Accepted successfully",
      updatedOrder,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const acceptOrder = asyncHandler(async (req, res) => {
  // Fetch order id from request parameters
  const { id } = req.params;

  // Then chec if the order exists or not
  const order = await Prisma.order.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          product: true, // Include product information for each item
        },
      },
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  // If it exists then proceed to order accepting process
  const updatedOrder = await Prisma.order.update({
    where: { id },
    data: {
      orderStatus: "ACCEPTED",
    },
  });

  // Update the quantity of each product in the order
  for (const item of order.items) {
    await Prisma.product.update({
      where: { id: item.productId },
      data: {
        quantity: item.product.quantity - item.quantity,
      },
    });

    res.status(200).json({
      success: true,
      message: "Successfully accepted order",
      updatedOrder,
    });
  }
});

const acceptedOrders = asyncHandler(async (req, res) => {
  // fetch accepted orders
  const acceptedOrders = await Prisma.order.findMany({
    where: {
      orderStatus: "ACCEPTED",
    },
  });

  if (!acceptedOrders) {
    throw new Error("There's not accepted orders");
  }

  res.status(200).json({
    success: true,
    acceptedOrders,
  });
});
module.exports = {
  createOrder,
  getAllOrders,
  getSpecificOrder,
  acceptPayment,
  acceptOrder,
  acceptedOrders,
};
