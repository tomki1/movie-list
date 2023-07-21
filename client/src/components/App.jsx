import React from 'react';
import ReactDOM from 'react-dom';
import sampleMovieData from '../data/sampleMovieData.js'
import MovieList from './MovieList.jsx'
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx'
import AddMovies from './AddMovies.jsx'

const {useState} = React;

const App = () => {

  const [movies, setMovies] = useState(sampleMovieData);
  const[searchedMovies, setSearchedMovies] = useState(movies);


  var searchHandler =(q) => {
    if (q === '') {
      setSearchedMovies([]);
    } else {
    var filtered = movies.filter(movie => movie.title.toLowerCase().includes(q.toLowerCase()));
    console.log(filtered);
    setSearchedMovies(filtered);
    }
  }

  var showAllHandler =() => {
    setSearchedMovies(movies);
    }

  var showWatched = (movies) => {
    var watchedArray = [];
    for (var i=0; i < movies.length; i++) {
    if (movies[i].watched === true) {
      watchedArray.push(movies[i]);
    }
    setSearchedMovies(watchedArray);
  }
  }
  var showToWatch = (movies) => {
    var toWatchArray = [];
    for (var i=0; i < movies.length; i++) {
    if (movies[i].watched === false) {
      toWatchArray.push(movies[i]);
    }
    setSearchedMovies(toWatchArray);
  }
  }

  return (
    <div>
      <div className="box">
        <div className="box-title">
          <h1 className="title">Movie List</h1>
        </div>
        <AddMovies movies={movies} setMovies={setMovies} showAllHandler={showAllHandler} setSearchedMovies={setSearchedMovies}/>
        <SearchBar searchHandler={searchHandler} showAllHandler={showAllHandler}/>
        <br></br>
        <div className="button-container">
          <button className="watched-button" onClick={ () => {showWatched(movies)}} id="watched">watched</button>
          <button className="towatch-button" onClick={ () => {showToWatch(movies)}} id="towatch">to watch</button>
        </div>
        <div>
          <MovieList movies={searchedMovies} originalMovies={movies} setMovies={setMovies} searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies}/>
        </div>
      </div>
    </div>
  )
};

export default App;