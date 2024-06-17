import React, { useState, useEffect } from 'react';

const LikedImages = () => {
  const [likedImages, setLikedImages] = useState([]); // State for storing the liked images

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('likedImages')) || []; // Get liked images from localStorage
    setLikedImages(storedImages); // Set the fetched liked images to the state
  }, []); // Empty dependency array means this effect runs once after the initial render

  const deleteImage = (index) => {
    const updatedImages = [...likedImages]; // Create a copy of the liked images array
    updatedImages.splice(index, 1); // Remove the image at the specified index
    setLikedImages(updatedImages); // Update the state with the new array
    localStorage.setItem('likedImages', JSON.stringify(updatedImages)); // Update localStorage with the new array
  };

  return (
    <div className="container">
      <h2>Liked Images</h2>
      {likedImages.length === 0 ? ( // Conditionally render message if no liked images
        <p>No liked images yet.</p>
      ) : (
        <div className="image-grid">
          {likedImages.map((image, index) => ( // Map over the liked images and render them
            <div key={index}>
              <h3>{image.title}</h3>
              <img src={image.url} alt={image.title} />
              <p>{image.explanation}</p>
              <button onClick={() => deleteImage(index)}>Delete</button> {/* Button to delete the image */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedImages; 