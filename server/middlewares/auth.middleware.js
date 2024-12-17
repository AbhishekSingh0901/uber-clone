const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      res.status(401).json({ message: "invalid token", success: false });
    }
    const user = await userModel.findById(decoded._id);
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error", success: false });
  }
};
module.exports.isAuthenticatedCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (!isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(401).json({ message: "invalid token", success: false });
    }
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error", success: false });
  }
};
