import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import { JobProvider } from './components/JobContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <JobProvider>
      <App />
    </JobProvider>
);
