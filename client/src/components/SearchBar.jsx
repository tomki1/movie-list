import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;

var SearchBar = ({searchHandler}) => {

  const [query, setQuery] = useState("");

  var handleSearch = (e) => {
    console.log("handleSearch", e);
    setQuery(e);
  }
  var handleClick = (q) => {
  console.log("in handle click", q);
    searchHandler(q);

    // searchHandler(event.target.value);
  }

  return (
    <div className="search-bar">
        <input type="search"
        id="movie-search"
        placeholder="Enter Movie Title"
        onChange={(event)=> handleSearch(event.target.value)}
        />
        <button onClick={ () => {handleClick(query)}}>Go</button>
    </div>
  )
}


export default SearchBar;