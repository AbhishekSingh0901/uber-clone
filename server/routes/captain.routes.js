const express = require("express");
const { body } = require("express-validator");
const {
  loginCaptain,
  registerCaptain,
  getCaptainProfile,
  logoutCaptain,
} = require("../controllers/captain.controller");
const { isAuthenticatedCaptain } = require("../middlewares/auth.middleware");
const router = express.Router();

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
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Vehicle color must be at least 3 characters"),
    body("vehicle.plate")
      .isLength({ min: 4 })
      .withMessage("Vehicle plate must be at least 3 characters"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Vehicle capacity must be at least 1 characters"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid Vehicle Type"),
  ],
  registerCaptain
);

router.post(
  "/login",
  [
    body("email").trim().isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  loginCaptain
);

router.get("/profile", isAuthenticatedCaptain, getCaptainProfile);
router.get("/logout", isAuthenticatedCaptain, logoutCaptain);
module.exports = router;
