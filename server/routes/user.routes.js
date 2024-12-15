const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerUser } = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").trim().isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("First name must be at least 2 characters"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  registerUser
);

module.exports = router;
