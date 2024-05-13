import React, { useState } from 'react';

function BadgeForm({ addBadge }) {
  //Intializing state hooks for each empty input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [favoriteFood, setFavoriteFood] = useState('');
  const [about, setAbout] = useState('');

  // handleSubmit function will be called on form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action
    const badgeData = {
      firstName, lastName, email, placeOfBirth, phone, favoriteFood, about,
    };
    addBadge(badgeData); // 
    // Resetting all input fields to empty strings after form submission
    clearFields();
  };

  // Function to check if the phone input is numeric
  const isNumeric = (value) => /^\d+$/.test(value);

  // Function to validate all fields: checks if each field has at least 3 characters and phone is numeric
  const validateFields = () => {
    const fields = [firstName, lastName, email, placeOfBirth, phone, favoriteFood, about];
    return fields.every(field => field.length >= 3 && isNumeric(phone));
  };

  // Function to clear all fields, setting all state hooks back to empty strings
  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPlaceOfBirth('');
    setPhone('');
    setFavoriteFood('');
    setAbout('');
  };

  // Render the form with input fields and buttons
  return (
    <form onSubmit={handleSubmit} className="badge-form">
      
      <input type="text" className="input-field" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" minLength={3} required />
      <input type="text" className="input-field" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" minLength={3} required />
      <input type="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" minLength={3} required />
      <input type="text" className="input-field" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} placeholder="Place of Birth" minLength={3} required />
      <input type="text" className="input-field" value={favoriteFood} onChange={(e) => setFavoriteFood(e.target.value)} placeholder="Favorite Food" minLength={3} required />
      <input type="text" className="input-field" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" pattern="^\d+$" minLength={10} maxLength={10} required />
      <textarea className="input-field" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Tell us about yourself" minLength={3} required />
      {/* Buttons for submitting the form and clearing the fields.*/}
      <button type="submit" disabled={!validateFields()}>Submit</button>
      <button type="button" onClick={clearFields}>Clear Fields</button>
    </form>
  );
}

// Exporting BadgeForm to be used in BadgeManager
export default BadgeForm;
