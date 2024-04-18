const asyncHandler = require("express-async-handler");
const Prisma = require("../Config/Prisma");

const PromoteToAdmin = asyncHandler(async (req, res) => {
  // Fetch the id from params
  const id = req.params.id;

  // Check if the user passed Id
  if (!id) {
    res.status(403);
    throw new Error("Please Enter Id");
  }

  // Fetch the user from the Prisma
  const user = await Prisma.user.findUnique({ where: { id } });

  // Check if the user exists
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  if (user.role === "admin") {
    res.status(200);
    throw new Error("User is already admin!");
  }

  // Update the user role
  const updatedUser = Prisma.user.update({
    where: { id },
    data: { role: "admin" },
  });

  // Return the updated user with success status
  res
    .status(200)
    .json({ success: true, message: "User updated successfully", updatedUser });
});
module.exports = {
  PromoteToAdmin,
};
