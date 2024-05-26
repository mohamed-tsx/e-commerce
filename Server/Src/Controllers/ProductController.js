const asyncHandler = require("express-async-handler");
const Prisma = require("../Config/Prisma");

const addProduct = asyncHandler(async (req, res) => {
  // Fetch product details from request body
  const { productName, productDescription, imageUrl } = req.body;

  // Fetch product price particularly and parse it into a float
  const productPrice = parseFloat(req.body.productPrice);

  // Fetch quantity particularly and parse it into a name
  const quantity = parseInt(req.body.quantity);

  // Check if the details are empty except imageUrl
  if (!(productDescription && productName && productPrice && quantity)) {
    res.status(403);
    throw new Error("Please fill all the required fields");
  }

  // If they're not empty then create the product
  const newProduct = await Prisma.product.create({
    data: {
      productName,
      productDescription,
      productPrice,
      quantity,
      imageUrl,
    },
  });
  // Return success response
  res.status(200).json({
    newProduct: newProduct,
    success: true,
    message: "Product created successfully",
  });
});

const allProducts = asyncHandler(async (req, res) => {
  // Fetch Products from database
  const allProducts = await Prisma.product.findMany();
  res.status(200).json({
    allProducts,
    success: true,
  });
});

const deleteProduct = asyncHandler(async (req, res) => {
  // Fetch product id from request params
  const id = req.params.id;

  // Fetch the rwquested product from database to verify if it exists
  const product = await Prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  // Delete the product

  const deletedProduct = await Prisma.product.delete({
    where: {
      id,
    },
  });

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    deletedProduct,
  });
});

module.exports = {
  addProduct,
  allProducts,
  deleteProduct,
};
