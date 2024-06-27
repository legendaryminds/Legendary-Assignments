// Import necessary modules and packages
import React from 'react'; 
import { FaStar } from 'react-icons/fa'; // Import FaStar icon from react-icons library

// StarRating component
const StarRating = ({ rating, onRatingChange }) => {
  // Function to handle star click
  const handleClick = (newRating) => {
    onRatingChange(newRating); // Call the onRatingChange function with the new rating
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`star ${star <= rating ? 'selected' : ''}`} // Apply 'selected' class to stars less than or equal to the current rating
          onClick={() => handleClick(star)} // Set rating when a star is clicked
        />
      ))}
    </div>
  );
};

export default StarRating; // Export the StarRating component
