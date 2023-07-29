import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const { useState } = React;


var MovieListEntry = ({movie, index, originalMovies, setMovies, searchedMovies, setSearchedMovies, loadMovies, showWatched, showToWatch}) => {

  var handleWatchedChange = () => {
    // change the movie's watch attribute
    if (movie.watched === 0) {
      movie.watched = 1;
    } else {
      movie.watched = 0;
    }

    const options = {
      headers: {"content-type": "application/json"}
    }
    // put request to change watched attribute
    axios.put('/api/movies', movie, options)
    .then(function (response) {
      loadMovies(); // refresh the movie list
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  // show movie entry with toggle set to watched
  if (movie.watched === 1) {
    return (
      <div className="movie-list-entry">
            <tr>
              <td className="movie-title">{movie.title}</td>
              <td className="watch-buttons"><button className="watched-button" value={movie} onClick={ () => {handleWatchedChange() } }>watched</button></td>
            </tr>
      </div>
    )
  } else {
    // show movie entry with toggle set to to watch
    return (
    <div className="movie-list-entry">
          <tr>
            <td className="movie-title">{movie.title}</td>
            <td className="watch-buttons"><button className="towatch-button" value={movie} onClick={ () => {handleWatchedChange() } }>to watch</button></td>
          </tr>
    </div>
    )
  }
}

export default MovieListEntry;