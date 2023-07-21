import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;

var SearchBar = ({searchHandler, showAllHandler, filtered2}) => {

  const [query, setQuery] = useState("");

  var handleSearch = (e) => {
    console.log("handleSearch", e);
    setQuery(e);
  }

  var handleClick = (q) => {
  console.log("in handle click search", q);
    searchHandler(q, filtered2);
  }

  var handleShowAll = () => {
    console.log("in show all");
    showAllHandler();
  }

  return (
    <div>
    <div className="search-bar">
        <input type="text"
        id="movie-search"
        placeholder="Enter Movie Title"
        onChange={(event)=> handleSearch(event.target.value)}
        />
        <button onClick={ () => {handleClick(query, filtered2)}}>Go</button>
    </div>
    <div className="show-all">
              <button onClick={ () => {handleShowAll()}}>Show All</button>
    </div>
    </div>
  )
}


export default SearchBar;