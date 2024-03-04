// App.jsx
import React from "react";
import Header from "./components/Header/Header"; 
import BlogList from "./components/BlogList/BlogList"; 
import Footer from "./components/Footer/Footer";
import data from "./data"; 
import './components/Header/Header.css';
import './components/BlogList/BlogPost.css';
import './components/Footer/Footer.css';


function App() {
  return (
    <div>
      <Header />
      <BlogList data={data} />
      <Footer />
    </div>
  );
}

export default App;
