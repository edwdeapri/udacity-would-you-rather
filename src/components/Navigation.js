import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/questions">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add">New Poll</NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
