import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map((movie, index) => {
      return(
        <div key={index}>
          <h2>{movie.title}</h2>
          <h4>{movie.time}</h4>
          <ul>
            {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
