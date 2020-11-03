import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeStyle={{fontWeight: "bold",color: "red"}}>
        Home
      </NavLink>
      <NavLink exact to="/actors" activeStyle={{fontWeight: "bold",color: "red"}}>
        Actors
      </NavLink>
      <NavLink exact to="/directors" activeStyle={{fontWeight: "bold",color: "red"}}>
        Directors
      </NavLink>
      <NavLink exact to="/movies" activeStyle={{fontWeight: "bold",color: "red"}}>
        Movies
      </NavLink>
    </div>
  );
};

export default NavBar;
