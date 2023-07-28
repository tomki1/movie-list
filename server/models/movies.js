const db = require('../db/index.js');


module.exports = {
  // database query to get all movies
  getAllMovies: function() {
    return new Promise ((resolve, reject) => {
      db.query('SELECT * FROM movies', (err, rows) => {
        if (err) {
          reject(err);
        }
          resolve(rows);
      });
    });
  },

  // database query to add to movie database
  addMovie: function() {



  },


  // databse query to update whether movie has been watched or needs to be watched
  updateMovieWatch: function() {



  }
};