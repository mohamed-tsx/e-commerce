const jwt = require("jsonwebtoken");
const generateToken = (id, email) => {
  // Fetch the id and email
  const payload = { id, email };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
