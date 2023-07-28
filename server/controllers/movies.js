var models = require('../models');

module.exports = {
  // get function will make a call to the models functions to get the movie data to display to client
  get: function (req, res) {
    res.send("hello from get");

  },

  /*
  // post function will make a call to the models functions to add more movies to the database
  post: function (req, res) {
    res.send("hello from post");
,
  }

  // put function will make a call to the models functions to update movies watched values
  put: function (req, res) {
    res.send("hello from put");
  }
  */
};