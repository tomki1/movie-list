import React from 'react';
import ReactDOM from 'react-dom';
import sampleMovieData from '../data/sampleMovieData.js'
import MovieList from './MovieList.jsx'
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx'
import AddMovies from './AddMovies.jsx'
import axios from "axios";

const {useState, useEffect} = React;

const App = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[searchedMovies, setSearchedMovies] = useState([]);


  // Load movies
  const loadMovies = () => {
    axios
    .get('/api/movies')
    .then((response) => {setMovies(response.data); setSearchedMovies(response.data);})
    .catch((error) => setError(error.message))
    .finally(() => setIsLoading(false));
  }

  useEffect(loadMovies, []);


/*
  // fetch movie data from server using jquery
  const fetchMovieData = () => {
    fetch('/api/movies')
      .then(response => {
        return response.json()
      })
      .then(movieData => {
        console.log(movieData);
        setMovies(movieData);
        setSearchedMovies(movieData);
      })
  }
  */

  // // check server for database updates
  // useEffect(() => {
  //   fetchMovieData()
  //   setIsLoading(false);
  // }, [])


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
    if (movies[i].watched === 1) {
      watchedArray.push(movies[i]);
    }
    setSearchedMovies(watchedArray);
  }
  }
  var showToWatch = (movies) => {
    var toWatchArray = [];
    for (var i=0; i < movies.length; i++) {
    if (movies[i].watched === 0) {
      toWatchArray.push(movies[i]);
    }
    setSearchedMovies(toWatchArray);
  }
  }

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <div className="box">
        <div className="box-title">
          <h1 className="title">Movie List</h1>
        </div>
        <AddMovies movies={movies} setMovies={setMovies} showAllHandler={showAllHandler} setSearchedMovies={setSearchedMovies} loadMovies={loadMovies}/>
        <SearchBar searchHandler={searchHandler} showAllHandler={showAllHandler}/>
        <br></br>
        <div className="button-container">
          <button className="watched-button" onClick={ () => {showWatched(movies)}} id="watched">watched</button>
          <button className="towatch-button" onClick={ () => {showToWatch(movies)}} id="towatch">to watch</button>
        </div>
        <div>
          <MovieList movies={searchedMovies} originalMovies={movies} setMovies={setMovies} searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} loadMovies={loadMovies} showWatched={showWatched} showToWatch={showToWatch}/>
        </div>
      </div>
    </div>
  )
};

export default App;