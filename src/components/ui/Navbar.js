import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/login">Logout</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}