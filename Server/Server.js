const express = require("express");
require("dotenv").config();
const userRoutes = require("./Src/Routes/userRoutes");
const adminRoutes = require("./Src/Routes/adminRoutes");
const productRoutes = require("./Src/Routes/ProductRoutes");
const errorHandler = require("./Src/Middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT;

const Server = express();

Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));


// Add cookie parser middleware before other routes and middleware
Server.use(cookieParser());

Server.use("/api/user/", userRoutes);
Server.use("/api/admin/", adminRoutes);
Server.use("/api/products/", productRoutes);

// Ensure errorHandler middleware comes after cookie-parser
Server.use(errorHandler);

Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
