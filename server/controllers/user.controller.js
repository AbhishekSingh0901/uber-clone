const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const { createUser } = require("../services/user.service");
const { sendToken } = require("../../utils/jwtToken");

module.exports.registerUser = async (req, res, next) => {
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
