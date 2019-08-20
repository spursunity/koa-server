const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({ name: 'string', year: 'number' });
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;