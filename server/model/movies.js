'use strict';

const mongoose = require('.');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  imdbId: String,
  title: String,
  imageURL: String,
});

const movieList = mongoose.model('favouriteMovieList', movieSchema);


module.exports = movieList;