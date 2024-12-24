const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAP_API_KEY;

  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    const { lat, lng } = response.data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    // handle error
    return null;
  }
};
