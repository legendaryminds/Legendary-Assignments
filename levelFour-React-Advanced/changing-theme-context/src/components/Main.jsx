import React, { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Main = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <main className={theme}>
            <h1>Main Content</h1>
        </main>
    );
};

export default Main;