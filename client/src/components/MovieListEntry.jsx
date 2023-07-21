import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;


var MovieListEntry = ({movie, index, originalMovies, setMovies, searchedMovies, setSearchedMovies}) => {

  // const [watched, setWatched] = useState(movie.watched);

  const [movieContents, setMovieContents] = useState({movie});

  var handleWatchedChange = (movieWatchedProperty) => {
    console.log("click watched")

    // console.log("index", index);
    // console.log(searchedMovies);
    // // make copy of movies being displayed
    // var copyArray = [...searchedMovies];
    // copyArray[index].watched = !(copyArray[index].watched);
    // setMovies(copyArray);

    console.log("original movies", originalMovies);
    //copy of original
    var originalCopy = [...originalMovies];
    var entryToChange = movie.title;
    console.log("entry to cange", entryToChange);
    for (var i =0; i < originalCopy.length; i++) {
      if (originalCopy[i].title === entryToChange) {
        console.log("changing")
        originalCopy[i].watched = !(originalCopy[i].watched);
        console.log(originalCopy[i].watched )
      }
    }

    setMovies(originalCopy);
    // setSearchedMovies(originalCopy);
    console.log(originalCopy[index])
    console.log("new array", originalCopy);
    // console.log({movie});
    // console.log(movie.title);
    // console.log(movie);
    // movie.title = 'hi';
    // setMovieContents({title: '33243243'});
    // console.log({movie});
    // console.log(movie.title);
    // console.log(movie);

    // setMovieContents({...movie, title: 'fleksfjselkfjsekf'});
    // console.log({movie})



    // if (movie.watched === 'watched') {
    //   console.log("in we need to change this from watched to to watch")
    //   this.setMovieContents={watched: 'to watch'};
    //   console.log('chnaged to to watch?', movie.watched)

    // } else {
    //   console.log("in we need to change this from to watched to watched")

    // }

  };


  if (movie.watched === true) {
    return (
      <div className="movie-list-entry">

            {movie.title}
            <button id="watchToggle" value={movie} onClick={ (e) => {handleWatchedChange(e.target.value)} }>watched</button>
      </div>
    )
  } else {
    return (
      <div className="movie-list-entry">

            {movie.title}
            <button id="watchToggle" value={movie} onClick={ (e) => {handleWatchedChange(e.target.value) } }>to watch</button>
      </div>
    )


  }


}







export default MovieListEntry;