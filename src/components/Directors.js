import React from 'react';
import { directors } from '../data';

const renderDirectors = () => {
  return directors.map( director => 
    <div>
      <h2>{director.name}</h2>
  <ul>{director.movies.map(genre => <li>{genre}</li>)}</ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
