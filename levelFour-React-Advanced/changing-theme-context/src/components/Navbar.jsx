import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <nav className={theme}>
            <h1>Navbar</h1>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </nav>
    );
};

export default Navbar;