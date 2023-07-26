import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/NewsBlend.png';
import user from '../assets/user.png';

function Header() {
  return (
    <header className='header'>
      <NavLink className="nav-link" to="/">
        <img className='logo' src={logo} alt="Logo" />
      </NavLink>
      <nav className="nav-links">
        <NavLink className="nav-link" to="/business">
          Business
        </NavLink>
        <NavLink className="nav-link" to="/entertainment">
          Entertainment
        </NavLink>
        <NavLink className="nav-link" to="/general">
          General
        </NavLink>
        <NavLink className="nav-link" to="/health">
          Health
        </NavLink>
        <NavLink className="nav-link" to="/science">
          Science
        </NavLink>
        <NavLink className="nav-link" to="/sports">
          Sports
        </NavLink>
        <NavLink className="nav-link" to="/technology">
          Technology
        </NavLink>
        <NavLink className="nav-link" to="/profile">
          <img className='user' src={user} alt="User" />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
