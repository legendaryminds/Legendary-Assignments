import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Get the root element from the HTML where the React app will be mounted
const rootElement = document.getElementById('root')

// Create a root container for React using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement)

// Render the App component into the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
