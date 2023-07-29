const db = require('../db/index.js');
var Promise = require('bluebird');

module.exports = {
  // database query to get all movies
  getAllMovies: function() {
    return new Promise ((resolve, reject) => {
      queryString = 'SELECT * FROM movies';
      db.query(queryString, (err, rows) => {
        if (err) {
          reject(err);
        }
          resolve(rows);
      });
    });
  },

  // database query to add to movie database
  addMovie: function(params) {
    return new Promise ((resolve, reject) => {
      var queryString = 'INSERT INTO movies (title, watched) VALUE (?, ?)';
      db.query(queryString, params, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

  // databse query to update whether movie has been watched or needs to be watched
  updateMovieWatch: function(params) {
    return new Promise ((resolve, reject) => {
      var queryString = 'UPDATE movies set watched = ? where id = ?';
      db.query(queryString, params, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  },

};