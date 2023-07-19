import React from 'react';
import ReactDOM from 'react-dom';
import sampleMovieData from '../data/sampleMovieData.js'
import MovieList from './MovieList.jsx'
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx'

const {useState} = React;

const App = () => {

  const [movies, setMovies] = useState(sampleMovieData);


  return (
    <div>
      <div className="box">
        <h1 className="title">Movie List</h1>
        <SearchBar />
        <div>
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  )
};

export default App;