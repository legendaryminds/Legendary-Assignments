import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseByDate from './pages/BrowseByDate';
import About from './pages/About';
import LikedImages from './pages/LikedImages';

function App() {
  return (
    <Router> {/* Wrap the application in Router to enable routing */}
      <Navbar /> {/* Navbar component */}
      <Routes> {/* Define the routes */}
        <Route path="/" element={<Home />} /> {/* Route for Home page */}
        <Route path="/browse" element={<BrowseByDate />} /> {/* Route for BrowseByDate page */}
        <Route path="/about" element={<About />} /> {/* Route for About page */}
        <Route path="/liked" element={<LikedImages />} /> {/* Route for LikedImages page */}
      </Routes>
    </Router>
  );
}

export default App; // Exporting the App component
