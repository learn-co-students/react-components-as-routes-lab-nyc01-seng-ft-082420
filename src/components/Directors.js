import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorsList = directors.map(x => {
    return(
      <div>
      <h2>{x.name}</h2>
      <ul>
        {x.movies.map(movie => { return (<li>{movie}</li>)})}
      </ul>
      </div>
    )

    
  })
  return (
    <div className="navbar">
      <h1> Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
