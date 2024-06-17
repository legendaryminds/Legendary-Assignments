import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';

const App = () => {
  return (
    <div>
      {/* Navbar will always be visible */}
      <Navbar />
      
      {/* Main content will change based on the route */}
      <main>
        <Routes>
          {/* Define routes for each view */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      {/* Footer will always be visible */}
      <Footer />
    </div>
  );
};

export default App;
