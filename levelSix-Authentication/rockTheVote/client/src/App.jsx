import React, { useContext } from "react";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import Public from "./components/Public";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/UserProvider";
import { Routes, Route, Navigate } from "react-router-dom";

// Main application component
export default function App() {
  // Get the token and logout function from UserContext
  const { token, logout } = useContext(UserContext);

  return (
    <>
      {/* Display the Navbar if the user is logged in */}
      {token && <Navbar logout={logout} />}
      <div id="app">
        <Routes>
          {/* Route to Auth component if not logged in, else redirect to Profile */}
          <Route path="/" element={token ? <Navigate to="/profile" /> : <Auth />} />
          {/* Protected Profile route, redirect to Auth if not logged in */}
          <Route path="profile" element={token ? <Profile /> : <Navigate to="/" />} />
          {/* Protected Public route, redirect to Auth if not logged in */}
          <Route path="public" element={token ? <Public /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}
