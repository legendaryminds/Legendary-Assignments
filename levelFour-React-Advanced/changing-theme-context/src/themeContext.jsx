import React, { createContext, useState } from 'react'

// Create the Theme Context
const ThemeContext = createContext();

const themes = {
  light: {
    background: 'white',
    color: 'black',
  },
  dark: {
    background: 'black',
    color: 'white',
  },
  blue: {
    background: 'blue',
    color: 'white',
  },
  green: {
    background: 'green',
    color: 'black',
  },
};

// Theme Provider Component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

  // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };


