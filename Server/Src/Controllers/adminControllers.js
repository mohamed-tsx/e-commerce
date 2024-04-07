const Prisma = require("../Config/Prisma");

const PromoteToAdmin = (req, res) => {
  // Fetch the id from params
  const id = req.params.id;

  // Fetch the user from the Prisma
  const user = Prisma.user.findUnique({ where: { id } });

  // Check if the user exists
  if (!user) {
    res.status(404);
    throw new Error("User not found");
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
};
module.exports = {
  PromoteToAdmin,
};
