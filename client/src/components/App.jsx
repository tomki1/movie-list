import React from 'react';
import ReactDOM from 'react-dom';
import sampleMovieData from '../data/sampleMovieData.js'
import MovieList from './MovieList.jsx'
import MovieListEntry from './MovieListEntry.jsx';

const {useState} = React;

const App = () => {

  const [movies, setMovies] = useState(sampleMovieData);


  return (
    <div>
      <h1>Movie List</h1>
      <MovieList movies={movies}/>
    </div>
  )
};

export default App;