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
  // var sampleMovieData = [
  //   {title: 'Mean Girls', watched: 'watched'},
  //   {title: 'Hackers', watched: 'unwatched'},]
  // setSearchedMovies();
  const handleWatchChange = (movie) => {
    console.log("inhandlewatchchange app")
    // 1. Find the todo with the provided id
    // 2. Mark the todo as complete
    // 3. Update the todo list with the updated todo
  };

  // const [query, setQuery] = useState("");

  // search function with user's query
  // var searchHandler = (q) => {
  //   // refresh data

  //   var filtered = movies.filter(filteredMovies => {
  //     // return empty
  //     if (q === '') {
  //       return filteredMovies;
  //     } else if (filteredMovies.title.toLowerCase().includes(q.toLowerCase())) {
  //       return filteredMovies
  //     }
  //     debugger;
  //     setSearchedMovies(filtered);

  //   })
  //   console.log("in search handler", q);
  // };

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
    console.log("clicked show all")
    setSearchedMovies(movies);
    console.log("show all ", movies);
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
        <h1 className="title">Movie List</h1>
        <AddMovies movies={movies} setMovies={setMovies} showAllHandler={showAllHandler} setSearchedMovies={setSearchedMovies}/>
        <SearchBar searchHandler={searchHandler} showAllHandler={showAllHandler}/>
        <div className="movie-list-watched">
          <button onClick={ () => {showWatched(movies)}} id="watched">watched</button>
      </div>

      <div className="movie-list-towatch">
          <button onClick={ () => {showToWatch(movies)}} id="towatch">to watch</button>
      </div>
        <div>
          <MovieList movies={searchedMovies} originalMovies={movies} setMovies={setMovies} searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies}/>
        </div>
      </div>
    </div>
  )
};

export default App;