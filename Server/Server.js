const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;

const Server = express();

Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
