import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Public from "./pages/Public";
import Auth from "./pages/Auth";
import EventPage from "./pages/EventPage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={!user ? <Auth /> : <Navigate to="/profile" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
        <Route path="/public" element={user ? <Public /> : <Navigate to="/" />} />
        <Route path="/events/:id" element={<EventPage />} />
      </Routes>
      </div>
  );
};

export default App;
