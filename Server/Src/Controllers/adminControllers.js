const Prisma = require("../Config/Prisma");

const PromoteToAdmin = (req, res) => {
  const id = req.params.id;

  const user = Prisma.user.findUnique({ where: { id } });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const updatedUser = Prisma.user.update({
    where: { id },
    data: { role: "admin" },
  });

  res
    .status(200)
    .json({ success: true, message: "User updated successfully", updatedUser });
};
module.exports = {
  PromoteToAdmin,
};
