const express = require("express");
require("dotenv").config();
const userRoutes = require("./Src/Routes/userRoutes");
const errorHandler = require("./Src/Middlewares/errorHandler");
const PORT = process.env.PORT;

const Server = express();

Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));
Server.use("/api/user/", userRoutes);

Server.use(errorHandler);

Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
