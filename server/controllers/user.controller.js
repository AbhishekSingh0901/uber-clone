const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const { createUser } = require("../services/user.service");
const { sendToken } = require("../utils/jwtToken");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
  const user = await createUser(
    fullname.firstname,
    fullname.lastname,
    email,
    hashedPassword
  );
  sendToken(user, 201, res, "User registration successful");
};

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  sendToken(user, 200, res, "User login successful");
};

module.exports.getUserProfile = (req, res) => {
  res.status(200).json({ user: req.user, success: true });
};

module.exports.logoutUser = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split("")[1];
  res.clearCookie("token");
  await blacklistTokenModel.create({ token });

  res.status(200).json({ message: "User logout successful", success: true });
};
