import React from 'react';
import { movies } from '../data';

const Movies = () => {
  

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>Title:{movie.title}</h2>
          <h2>Time:{movie.time}</h2>
          <h2>Genres:</h2>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
