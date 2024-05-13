import React from 'react';


export default function Pet({ name, breed }) {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h4>{name}</h4>
      <p>Breed: {breed}</p>
    </div>
  );
}