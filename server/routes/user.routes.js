const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} = require("../controllers/user.controller");
const { isAuthenticatedUser } = require("../middlewares/auth.middleware");

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

router.post(
  "/login",
  [
    body("email").trim().isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  loginUser
);

router.get("/profile", isAuthenticatedUser, getUserProfile);
router.get("/logout".isAuthenticatedUser, logoutUser);
module.exports = router;
