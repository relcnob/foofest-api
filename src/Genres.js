const bands = require("./Bands.js");
const genres = { genres: [] };

bands.forEach((band) => {
  if (!genres.genres.includes(band.genre)) {
    genres.genres.push(band.genre);
  }
});

module.exports = genres;
