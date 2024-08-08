const express = require('express')
const { retrieveAllMovies, addMovie, removeMovie } = require('./controllers/movies')
const router = express.Router();

router.get('/', retrieveAllMovies)

router.post('/', addMovie)

router.delete('/', removeMovie)

module.exports = router;