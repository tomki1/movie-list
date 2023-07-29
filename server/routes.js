const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// get request
router.get('/api/movies', controller.movies.get);

// post request
router.post('/api/movies', controller.movies.post);

// put request
router.put('/api/movies', controller.movies.put);

module.exports = router;