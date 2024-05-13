import React from 'react';

function Badge({ badge, index }) {
  // Destructure the badge props for easier access
  const {
    firstName,
    lastName,
    email,
    placeOfBirth,
    phone,
    favoriteFood,
    about
  } = badge;

  // A simple styling object for alternating background colors
  const badgeStyle = {
    backgroundColor: index % 2 === 0 ? 'pink' : 'purple', 
  };

  return (
    <div className="badge" >
      <h2 style={badgeStyle}>Badge:</h2>
      <p><strong>Name:</strong> {firstName} {lastName}</p>
      <p><strong>Place of birth:</strong> {placeOfBirth}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Favorite food:</strong> {favoriteFood}</p>
      <p><strong>About:</strong> {about}</p>
    </div>
  );
}

export default Badge;
