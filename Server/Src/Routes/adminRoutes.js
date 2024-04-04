const express = require("express");
const router = express.Router();

router.post("/promote-to-admin", PromoteToAdmin);

module.exports = router;
