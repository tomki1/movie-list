var models = require('../models/index.js');

module.exports = {
  // get function will make a call to the models functions to get the movie data to display to client
  get: function (req, res) {
    models.movies.getAllMovies()
      .then(data => res.send((data)))
      .catch(err => res.send(err))
  },

  // post function will make a call to the models functions to add more movies to the database
  post: function (req, res) {
    var params = [req.body.title, req.body.watched];
    models.movies.addMovie(params)
      .then(data => res.sendStatus(201))
      .catch(err => res.sendStatus(500));
  },

  // put function will make a call to the models functions to update movies watched values
  put: function (req, res) {
    var params = [req.body.watched, req.body.id];
    models.movies.updateMovieWatch(params)
      .then(data => {res.sendStatus(200)})
      .catch(err => res.sendStatus(500));
  }
};