import React from 'react';
import ReactDOM from 'react-dom';

var MovieListEntry = ({movie}) => {

  return (
    <div className="movie-list-entry">
      {movie.title}
    </div>
  )
}







export default MovieListEntry;