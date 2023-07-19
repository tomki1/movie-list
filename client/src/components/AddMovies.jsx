import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;



  var AddMovies = ({movies, setMovies}) => {

  const [movieToAdd, setMovieToAdd] = useState('');

  var handleAdd = (e) => {
    console.log("handleAdd", e);
    setMovieToAdd(e);
  }

  var handleClick = (movieToAdd) => {
    console.log('in handle click add', movieToAdd);
    var movieAdd = {title: movieToAdd};
    console.log(movieAdd);
    setMovies([...movies, movieAdd]);


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