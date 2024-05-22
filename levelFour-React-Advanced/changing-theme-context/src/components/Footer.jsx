import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={theme}>
            <h1>Footer</h1>
        </footer>
    );
};

export default Footer;