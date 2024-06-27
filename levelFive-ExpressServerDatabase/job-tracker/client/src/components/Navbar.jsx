import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h1>Job Manifestor</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/add-job"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Add Job
        </NavLink>
        <NavLink
          to="/adzuna-search"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Search Adzuna Jobs
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
