import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const { useState } = React;

  var AddMovies = ({movies, setMovies, showAllHandler, setSearchedMovies, loadMovies}) => {

  const [movieToAdd, setMovieToAdd] = useState({title: '', watched: 0});

  var handleAdd = (e) => {
    setMovieToAdd({...movieToAdd, title: e});
  }

  var handleClick = (movieToAdd) => {
    if (movieToAdd.title === '') {
      alert("Please enter at least one character for the title.");
      return;
    }
    var arrayCopy = [...movies];
    for (var i = 0; i < arrayCopy.length; i++) {
      if (arrayCopy[i].title.toLowerCase() === movieToAdd.title.toLowerCase()) {
        alert("This is a duplicate title. Please enter a different title.");
        return;
      }
    }

    const options = {
      headers: {"content-type": "application/json"}
    }
    // post request to add movie
    axios.post('/api/movies', movieToAdd, options)
    .then(function (response) {
      loadMovies(); // make a get request to refresh the list of movies
    })
    .catch(function (error) {
      res.send(error);
    });
  }

  return (
    <div className="add-bar">
        <input type="text"
        id="add-movie"
        placeholder="Enter Movie Title"
        onChange={(event)=> handleAdd(event.target.value)}
        />
        <button onClick={ () => {handleClick(movieToAdd)}}>Add</button>
    </div>
  )
};

export default AddMovies;