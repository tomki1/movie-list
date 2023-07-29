import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.jsx';
var MovieList = ({movies, originalMovies, setMovies, searchedMovies, setSearchedMovies}) => {

  return (
    <div>
      <div className="movie-list">
      <table>
          <tbody>
             {movies.map((movie, index) => <MovieListEntry movie={movie} key={index} index={index} setMovies={setMovies} searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} originalMovies={originalMovies}/>)}
          </tbody>
        </table>
      </div>
    </div>
  )
  };

export default MovieList;