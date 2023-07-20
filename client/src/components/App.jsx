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
    setSearchedMovies(movies);
    }


  return (
    <div>
      <div className="box">
        <h1 className="title">Movie List</h1>
        <AddMovies movies={movies} setMovies={setMovies}/>
        <SearchBar searchHandler={searchHandler} showAllHandler={showAllHandler}/>
        <div>
          <MovieList movies={searchedMovies}/>
        </div>
      </div>
    </div>
  )
};

export default App;