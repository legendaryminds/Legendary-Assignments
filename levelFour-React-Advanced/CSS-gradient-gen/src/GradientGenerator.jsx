import React, { useState, useEffect } from 'react';

const GradientGenerator = () => {
  const [colors, setColors] = useState(['#FFFF00', '#000000']); // Default two colors
  const [angle, setAngle] = useState(50); // Default angle
  const [gradientCode, setGradientCode] = useState('');
  
  useEffect(() => {
    // Generate gradient code on any change in colors or angle
    const code = `background: linear-gradient(${angle}deg, ${colors.join(', ')}); 
-moz-background: linear-gradient(${angle}deg, ${colors.join(', ')}); 
-webkit-background: linear-gradient(${angle}deg, ${colors.join(', ')});`;
    setGradientCode(code);
  }, [colors, angle]); // Dependency array includes colors and angle

  // Function to add a new color
  const addColor = () => {
    setColors([...colors, '#FFFFFF']); // Adds white as a new color
  };

  // Function to remove a color
  const removeColor = () => {
    if (colors.length > 2) {
      setColors(colors.slice(0, -1));
    }
  };

  // Function to update color
  const updateColor = (index, value) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  // Function to update angle
  const updateAngle = (e) => {
    setAngle(e.target.value);
  };

  return (
    <div>
      <div style={{ background: `linear-gradient(${angle}deg, ${colors.join(', ')})`, height: '200px', width: '400px', margin: '10px' }}>
        {/* This div serves as the preview area for the gradient */}
      </div>
      {colors.map((color, index) => (
        <input
          type="color"
          key={index}
          value={color}
          onChange={(e) => updateColor(index, e.target.value)}
        />
      ))}
      <button onClick={addColor}>Add Color</button>
      <button onClick={removeColor}>Remove Color</button>
      <input
        type="range"
        min="0"
        max="360"
        value={angle}
        onChange={updateAngle}
      />
      <textarea readOnly value={gradientCode} rows="4" />
    </div>
  );
};


export default GradientGenerator;
