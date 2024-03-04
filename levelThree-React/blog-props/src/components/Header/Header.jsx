import React from "react";
import Navbar from './Navbar'; // Make sure this path is correct
import './Header.css'; // Assuming you have a CSS file for styling

function Header() {
  return (
    <>
      
      <header className="masthead" style={{ backgroundImage: `url('Notebook.avif')` }}>
       <Navbar />
        <div className="overlay"></div>
        <div className="container">
              <div className="site-heading">
                <h1>Clean <br></br>Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
      </header>
    </>
  );
}

export default Header;
