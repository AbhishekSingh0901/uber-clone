const { getAddressCoordinate } = require("../services/maps.service");

module.exports.getCoordinates = async function (req, res, next) {
  const { address } = req.query;
  try {
    const coordinates = getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (err) {
    res.status(404).json({ message: "Coordinates not found" });
  }
};
