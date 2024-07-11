const cloudinary = require("cloudinary");

const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

cloudinary.v2.config({
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  cloud_name: CLOUDINARY_NAME,
});

module.exports = {
  cloudinary,
};
