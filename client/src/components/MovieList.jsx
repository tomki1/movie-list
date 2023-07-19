import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.jsx';
var MovieList = ({movies}) => {

  return (
    <div>
      <div className="movie-list">
        {movies.map((movie, index) => <MovieListEntry movie={movie} key={index}/>)}
      </div>
    </div>
  )
  };







  export default MovieList;