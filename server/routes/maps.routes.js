const express = require("express");
const { isAuthenticatedUser } = require("../middlewares/auth.middleware");
const { getCoordinates } = require("../controllers/map.controller");
const { query } = require("express-validator");
const router = express.Router();

router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  isAuthenticatedUser,
  getCoordinates
);

module.exports = router;
