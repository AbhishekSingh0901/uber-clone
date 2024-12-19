const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const { createCaptain } = require("../services/captain.service");
const { sendToken } = require("../utils/jwtToken");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  const { fullname, email, password, vehicle } = req.body;
  const { firstname, lastname } = fullname;

  const captainExists = await captainModel.findOne({ email });
  if (captainExists) {
    return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await createCaptain({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  sendToken(captain, 201, res, "captain registered successfully");
};

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  sendToken(captain, 200, res, "captain login successfully");
};

module.exports.getCaptainProfile = (req, res) => {
  res.status(200).json({ user: req.captain, success: true });
};

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split("")[1];
  res.clearCookie("token");
  const blacklistToken = await blacklistTokenModel.create({ token });

  res.status(200).json({ message: "User logout successful", success: true });
};
