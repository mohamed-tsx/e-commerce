const Prisma = require("../Config/Prisma");

const isAdmin = async (req, res, next) => {
  const { id } = req.user;

  try {
    // Await the Prisma query to get the user
    const user = await Prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Ensure correct comparison of user role
    if (user.role !== "admin") {
      res.status(403);
      throw new Error("Only admin can perform this operation!");
    }

    next();
  } catch (error) {
    next(error); // Pass error to error handler middleware
  }
};

module.exports = {
  isAdmin,
};
