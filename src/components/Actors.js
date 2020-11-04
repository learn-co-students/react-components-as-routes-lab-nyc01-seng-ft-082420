import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsList = actors.map(x => {return (
    <div>
      <h2>{x.name}</h2>
      <ul>
        {x.movies.map(movie => {return (<li>{movie}</li>)})}
      </ul>
    </div>
  )})
  return (
    <div className="navbar">
      <h1> Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
