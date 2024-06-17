import React, { useState } from 'react';
import axios from 'axios';

const BrowseByDate = () => {
  const [date, setDate] = useState(''); // State for storing the selected date
  const [image, setImage] = useState(null); // State for storing the fetched image

  const handleDateChange = (e) => {
    setDate(e.target.value); // Update the date state when the input changes
  };

  const fetchImage = async () => {
    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=WwkZIc0wr4bwbW1vkkken351WNaZiA2lbt2KJkGx`);
      setImage(response.data); // Set the fetched image data to the state
    } catch (error) {
      console.error('Error fetching the image', error); // Handle errors if the API request fails
    }
  };

  const likeImage = () => {
    const storedImages = JSON.parse(localStorage.getItem('likedImages')) || []; // Get liked images from localStorage
    storedImages.push(image); // Add the current image to the liked images
    localStorage.setItem('likedImages', JSON.stringify(storedImages)); // Save the updated liked images back to localStorage
  };

  return (
    <div className="container">
      <h2>Browse by Date</h2>
      <input type="date" value={date} onChange={handleDateChange} /> {/* Date input field */}
      <button onClick={fetchImage}>Fetch Image</button> {/* Button to fetch the image */}
      {image && ( // Conditionally render the image details if an image is fetched
        <div>
          <h1>{image.title}</h1>
          <img src={image.url} alt={image.title} />
          <p>{image.explanation}</p>
          <button onClick={likeImage}>Like</button> {/* Button to like the image */}
        </div>
      )}
    </div>
  );
};

export default BrowseByDate; 
