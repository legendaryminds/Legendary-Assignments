import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link component to create navigable links

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to Home page */}
        <li><Link to="/browse">Browse by Date</Link></li> {/* Link to Browse by Date page */}
        <li><Link to="/about">About</Link></li> {/* Link to About page */}
        <li><Link to="/liked">Liked Images</Link></li> {/* Link to Liked Images page */}
      </ul>
    </nav>
  );
};

export default Navbar; 
