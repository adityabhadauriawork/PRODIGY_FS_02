const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};