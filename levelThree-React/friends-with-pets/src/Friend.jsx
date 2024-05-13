import React from 'react';
import Pet from './components/Pet'


export default function Friend({ name, age, pets }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <div>
        {pets.map((pet) => (
          <Pet name={pet.name} breed={pet.breed} />
        ))}
      </div>
    </div>
  );
}

