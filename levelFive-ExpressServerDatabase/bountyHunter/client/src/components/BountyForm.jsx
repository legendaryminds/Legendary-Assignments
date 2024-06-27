import React, { useState, useEffect } from 'react';

const BountyForm = ({ addBounty, updateBounty, editMode, initialData, handleCancelEdit }) => {
  const [bounty, setBounty] = useState({
    firstName: '',
    lastName: '',
    living: true,
    bountyAmount: '',
    type: 'Jedi'
  });

  useEffect(() => {
    if (editMode && initialData) {
      // Set the form with initial data if in edit mode
      setBounty(initialData);
    }
  }, [editMode, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBounty(prevBounty => ({
      ...prevBounty,
      // Convert living field to boolean
      [name]: name === 'living' ? value === 'true' : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Call update function if in edit mode
      updateBounty(bounty._id, bounty);
    } else {
      // Call add function if in add mode
      addBounty(bounty);
    }
    setBounty({
      firstName: '',
      lastName: '',
      living: true,
      bountyAmount: '',
      type: 'Jedi'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={bounty.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={bounty.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="number"
        name="bountyAmount"
        value={bounty.bountyAmount}
        onChange={handleChange}
        placeholder="Bounty Amount"
        required
      />
      <select
        name="type"
        value={bounty.type}
        onChange={handleChange}
      >
        <option value="Jedi">Jedi</option>
        <option value="Sith">Sith</option>
        <option value="Smuggler">Smuggler</option>
      </select>
      <select
        name="living"
        value={bounty.living}
        onChange={handleChange}
      >
        <option value="true">Alive</option>
        <option value="false">Dead</option>
      </select>
      <button type="submit">{editMode ? 'Update Bounty' : 'Add Bounty'}</button>
      {editMode && <button type="button" onClick={handleCancelEdit}>Cancel</button>}
    </form>
  );
};

export default BountyForm;
