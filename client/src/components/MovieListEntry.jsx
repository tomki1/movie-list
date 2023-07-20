import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;


var MovieListEntry = ({movie}) => {

  const [watched, setWatched] = useState(movie.watched);

  var toggleWatched = (movieWatchedProperty) => {
    console.log("in toggleWatched", movieWatchedProperty);
    if (movie.watched === 'watched') {
      setWatched('to watch');
    } else {
      setWatched('watched');
    }

  };

  return (
    <div className="movie-list-entry">

          {movie.title}
          <button id="watchToggle" value={movie.watched} onClick={ (e) => {toggleWatched(e.target.value)}}>{movie.watched}</button>
    </div>
  )
}







export default MovieListEntry;