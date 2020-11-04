import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>

      <div><NavLink to="/" exact >Home</NavLink></div>
      <div><NavLink to="/movies" exact >Movies</NavLink></div>
      <div><NavLink to="/directors" exact >Directors</NavLink></div>
      <div><NavLink to="/actors" exact >Actors</NavLink></div>
    </div>
  );
};

export default NavBar;
