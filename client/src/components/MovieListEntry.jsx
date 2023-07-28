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
        if (originalCopy[i].watched === 1) {
          originalCopy[i].watched = 0;
        } else {
          originalCopy[i].watched = 1;
        }

      }
    }
    setMovies(originalCopy);
  };


  if (movie.watched === 1) {
    return (
      <div className="movie-list-entry">
        <table>
          <tbody>
            <tr>
              <td>{movie.title}</td>
              <td><button className="watched-button" value={movie} onClick={ (e) => {handleWatchedChange(e.target.value) } }>watched</button></td>
            </tr>
          </tbody>
        </table>
            {/* {movie.title}
            <button className="watched-button" value={movie} onClick={ (e) => {handleWatchedChange(e.target.value)} }>watched</button> */}
      </div>
    )
  } else {
    return (
    <div className="movie-list-entry">
      <table>
        <tbody>
          <tr>
            <td>{movie.title}</td>
            <td><button className="towatch-button" value={movie} onClick={ (e) => {handleWatchedChange(e.target.value) } }>to watch</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}







export default MovieListEntry;