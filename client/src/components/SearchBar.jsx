import React from 'react';
import ReactDOM from 'react-dom';

var SearchBar = () => {

  return (
    <div className="search-bar">
        <input type="search" id="movie-search" name="q"/>
        <button>Search</button>
    </div>
  )


}


export default SearchBar;