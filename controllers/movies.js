const { Movie } = require('../models');

/**
 * query params are
 * year: Number
 * time: Number [0, 1]
 */
async function findMovieByYear(ctx) {
  try {
    const { year = "2019", time = "0" } = ctx.query;
    let response = [];
    const movieYear = parseInt(year, 10);
    const movieTime = parseInt(time, 10);

    switch (movieTime) {
      case 0:
        response = await Movie.find({ year: { $lte: movieYear } });
        break;
      case 1:
        response = await Movie.find({ year: { $gte: movieYear } });
        break;
      default:
        throw new Error('bad query params');
    }

    if (!response) throw new Error('cannot find movie');

    ctx.status = 200;
    ctx.body = response;
  } catch (e) {
    console.log(e.message);
    ctx.status = 500;
    ctx.body = e.message;
  }
};

/**
 * query params
 * name: String
 */
async function findMovieByName(ctx) {
  try {
    const { name: movieName } = ctx.query;

    const response = Movie.findOne({ name: movieName });

    if (!response) throw new Error('cannot find movie');

    ctx.status = 200;
    ctx.body = response;
  } catch (e) {
    console.log(e.message);
    ctx.status = 500;
    ctx.body = e.message;
  }
};

module.exports = {
  findMovieByYear,
  findMovieByName,
};
