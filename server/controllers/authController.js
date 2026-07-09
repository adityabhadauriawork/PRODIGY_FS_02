const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");

exports.register = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);

    res.status(201).json(admin);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });

  if (!admin) {
    return res.status(400).json({
      message: "Invalid Credentials",
    });
  }

  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    return res.status(400).json({
      message: "Invalid Credentials",
    });
  }

  const token = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.json({
    token,
  });
};