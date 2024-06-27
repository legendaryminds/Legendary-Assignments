import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Ensure this path is correct
import './App.css';   // Ensure this path is correct
import { JobProvider } from './components/JobContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <JobProvider>
    <App />
  </JobProvider>
)
