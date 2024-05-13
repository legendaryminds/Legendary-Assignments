import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomColor() {
    const [color, setColor] = useState('#fff'); // Default background color

    useEffect(() => {
        fetchColor();
    }, []);

    const fetchColor = async () => {
        try {
            const response = await axios.get('https://random-color.onrender.com/colors/random');
            setColor(response.data.hex); 
        } catch (error) {
            console.error('Error fetching color:', error);
            
        }
    };

    return (
        <div style={{ height: '100vh', backgroundColor: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
            <p>The background color is: {color}</p>
        </div>
    );
}

export default RandomColor;

