const express = require('express');
const router = express.Router();
const controller = require('./controllers');

// // home page
// router.get('/', (req, res) => {
//   res.send('hello')
// })

// get request
router.get('/api/movies', controller.movies.get);



/*
// post request
router.post('/', controller.movies.post);

// put request
router.put('/', controller.movies.put);
*/

module.exports = router;