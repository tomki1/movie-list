import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;



  var AddMovies = ({movies, setMovies, showAllHandler, setSearchedMovies}) => {

  const [movieToAdd, setMovieToAdd] = useState({title: '', watched: false});

  var handleAdd = (e) => {
    console.log("handleAdd", e);
    setMovieToAdd({...movieToAdd, title: e});
  }

  var handleClick = (movieToAdd) => {
    console.log('in handle click add', movieToAdd);
    var arrayCopy = [...movies];
    console.log("array copy", arrayCopy)
    for (var i = 0; i < arrayCopy.length; i++) {
      if (arrayCopy[i].title === movieToAdd.title) {
        console.log("don't add, this is a duplicate title");
        return;
      }
    }

    arrayCopy.push(movieToAdd);
    setMovies(arrayCopy);
    setSearchedMovies(arrayCopy);
    console.log("after handle click", movies);


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