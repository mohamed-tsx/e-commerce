const asyncHandler = require("express-async-handler");
const Prisma = require("../Config/Prisma");
const { cloudinary } = require("../Config/Cloudinary");

// @description Add product
// @Method POST
// @Route /products/add/
// @Access private only admin can access this route
const addProduct = asyncHandler(async (req, res) => {
  // Fetch product details from request body
  const { productName, productDescription } = req.body;

  // Fetch product image from request file
  const image = req.file;

  // Declare result to store the link
  let result;

  // Check if image exists
  if (image) {
    // Incode the image from jpeg to base64
    let encodedImage = `data:image/jpeg;base64,${image.buffer.toString(
      "base64"
    )}`;

    result = await cloudinary.uploader.upload(encodedImage, {
      resource_type: "image",
      transformation: [{ width: 768, height: 768, crop: "limit" }],
      encoding: "base64",
    });
  }

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
      imageUrl: result.secure_url,
    },
  });
  // Return success response
  res.status(200).json({
    newProduct: newProduct,
    success: true,
    message: "Product created successfully",
  });
});

// @description Find all products
// @Method GET
// @Route /products/allProducts/
// @Access public
const allProducts = asyncHandler(async (req, res) => {
  // Fetch Products from database
  const allProducts = await Prisma.product.findMany();
  res.status(200).json({
    allProducts,
    success: true,
  });
});

// @description Find all products
// @Method GET
// @Route /products/allProducts/
// @Access public
const adminViewAllProducts = asyncHandler(async (req, res) => {
  // Fetch Products from database
  const allProducts = await Prisma.product.findMany({
    include: {
      OrderItems: true,
    },
  });
  res.status(200).json({
    allProducts,
    success: true,
  });
});

// @description Delete one product
// @Method DELETE
// @Route /products/deleteProduct/:id
// @Access private only admin can access this route
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

// @description Find one product
// @Method GET
// @Route /products/:id
// @Access public
const oneProduct = asyncHandler(async (req, res) => {
  //Fetch id from request body
  const id = req.params.id;

  //check if id is passed
  if (!id) {
    throw new Error("Please choose a valid product");
  }

  //Fetch product from database
  const product = await Prisma.product.findUnique({
    where: { id },
  });

  // Check if product exists
  if (!product) {
    throw new Error("Product not found");
  }

  // Response the product with success message if the product exists
  res.status(200).json({
    success: true,
    product,
  });
});

module.exports = {
  addProduct,
  allProducts,
  deleteProduct,
  oneProduct,
  adminViewAllProducts,
};
