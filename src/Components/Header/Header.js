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
        <NavLink className="nav-link" to="/profile">
          <img className='user' src={user} alt="User" />
        </NavLink>
    </header>
  );
}

export default Header;
