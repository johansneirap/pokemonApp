import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import {LOGOUT} from '../../context/types';

export const Navbar = () => {

  const {user, dispatch} = useContext(AuthContext);

  const history = useHistory();
  const handleLogout = ()=>{
    dispatch({
      type: LOGOUT,
      payload: {}
    })
    history.replace('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" to="/search">Search</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
          <li className="nav-item">
              <a  className="nav-link text-info" to="/login">{user.name}</a>
            </li>
            <li className="nav-item">
              <button 
                className="btn nav-link" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}