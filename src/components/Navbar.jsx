import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">📚 Online Library System</h2>
      <ul>
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/books" activeclassname="active">Browse Books</NavLink></li>
        <li><NavLink to="/add" activeclassname="active">Add Book</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
