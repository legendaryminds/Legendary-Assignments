import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// axios.get("/movies") local proxy
//  axios.get("http://rickandmortyapi.com") external source

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);