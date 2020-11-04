import React from 'react';
import { movies } from '../data';

const Movies = () => {

  let moviesMap = () => {
    let moviesList = movies.map(x => {return (
    <div>
      
      <h2>{x.title}</h2>
      <h3>Time Length : {x.time}</h3>
      <ul> <i>Genres</i>
        {x.genres.map(genre => {return (<li>{genre}</li>)})}
      </ul>
    
    </div>)})

    return moviesList
  }
  return (
    <div className="navbar">
      <h1>Movies Page</h1>
        {moviesMap()}
    </div>
  );
};

export default Movies;
