import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;


var MovieListEntry = ({movie, index, originalMovies, setMovies, searchedMovies, setSearchedMovies}) => {

  const [movieContents, setMovieContents] = useState({movie});

  var handleWatchedChange = (movieWatchedProperty) => {
    console.log("click watched")
    console.log("original movies", originalMovies);
    //copy of original
    var originalCopy = [...originalMovies];
    var entryToChange = movie.title;
    for (var i =0; i < originalCopy.length; i++) {
      if (originalCopy[i].title === entryToChange) {
        originalCopy[i].watched = !(originalCopy[i].watched);
      }
    }
    setMovies(originalCopy);
  };


  if (movie.watched === true) {
    return (
      <div className="movie-list-entry">
        <table>
          <tr>
            <td>{movie.title}</td>
            <td><button className="watched-button" value={movie} onClick={ (e) => {handleWatchedChange(e.target.value) } }>watched</button></td>
            </tr>
        </table>
            {/* {movie.title}
            <button className="watched-button" value={movie} onClick={ (e) => {handleWatchedChange(e.target.value)} }>watched</button> */}
      </div>
    )
  } else {
    return (
    <div className="movie-list-entry">
      <table>
        <tr>
          <td>{movie.title}</td>
          <td><button className="towatch-button" value={movie} onClick={ (e) => {handleWatchedChange(e.target.value) } }>to watch</button></td>
          </tr>
      </table>
    </div>
    )
  }
}







export default MovieListEntry;