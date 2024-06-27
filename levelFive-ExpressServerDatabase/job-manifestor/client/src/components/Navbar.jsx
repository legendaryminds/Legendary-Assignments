import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';  // Import the general CSS file

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="title">Job Manifestor</h1>
      <nav className="navbar">
        <NavLink exact="true" to="/" className="nav-link" activeclassname="active">Home</NavLink>
        <NavLink to="/dashboard" className="nav-link" activeclassname="active">Dashboard</NavLink>
        <NavLink to="/add-job" className="nav-link" activeclassname="active">Add Job</NavLink>
        <NavLink to="/adzuna-search" className="nav-link" activeclassname="active">Search Adzuna Jobs</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
