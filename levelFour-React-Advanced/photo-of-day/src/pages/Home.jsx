import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [image, setImage] = useState(null); // State for storing the fetched image

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=WwkZIc0wr4bwbW1vkkken351WNaZiA2lbt2KJkGx');
        setImage(response.data); // Set the fetched image data to the state
      } catch (error) {
        console.error('Error fetching the image', error); // Handle errors if the API request fails
      }
    };

    fetchImage(); // Fetch the image when the component mounts
  }, []); // Empty dependency array means this effect runs once after the initial render

  const likeImage = () => {
    const storedImages = JSON.parse(localStorage.getItem('likedImages')) || []; // Get liked images from localStorage
    storedImages.push(image); // Add the current image to the liked images
    localStorage.setItem('likedImages', JSON.stringify(storedImages)); // Save the updated liked images back to localStorage
  };

  if (!image) return <div>Loading...</div>; // Render a loading state if the image is not yet fetched

  return (
    <div className="container">
      <h1>{image.title}</h1>
      <img src={image.url} alt={image.title} />
      <p>{image.explanation}</p>
      <button onClick={likeImage}>Like</button> {/* Button to like the image */}
    </div>
  );
};

export default Home; 
