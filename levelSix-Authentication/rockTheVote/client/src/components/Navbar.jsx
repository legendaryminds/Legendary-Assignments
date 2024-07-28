import React from 'react';
import { Link } from "react-router-dom"

function Navbar({logout}) {
  return (
    <div id="navbar">
      <Link to="/profile"><button>Profile</button></Link>
      <Link to="/public"><button>Public</button></Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
