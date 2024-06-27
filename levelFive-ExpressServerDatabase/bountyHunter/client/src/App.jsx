import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BountyList from './components/BountyList';
import BountyForm from './components/BountyForm';

const App = () => {
  // State to hold the list of bounties
  const [bounties, setBounties] = useState([]);
  // State to control edit mode
  const [editMode, setEditMode] = useState(false);
  // State to hold the bounty being edited
  const [bountyToEdit, setBountyToEdit] = useState(null);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        // Fetch all bounties from the server
        const response = await axios.get('/bounty');
        // Set the bounties state with the fetched data
        setBounties(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetch function when the component mounts: only once
    fetchBounties();
  }, []);

  const addBounty = async (bounty) => {
    try {
      // Send a POST request to add a new bounty
      const response = await axios.post('/bounty', bounty);
      // Add the new bounty to the state
      setBounties([...bounties, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateBounty = async (id, updatedBounty) => {
    try {
      // Send a PUT request to update a bounty
      const response = await axios.put(`/bounty/${id}`, updatedBounty);
      // Update the bounty in the state
      setBounties(bounties.map(b => b._id === id ? response.data : b));
      // Exit edit mode
      setEditMode(false);
      // Clear the bounty being edited
      setBountyToEdit(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBounty = async (id) => {
    try {
      // Send a DELETE request to remove a bounty
      await axios.delete(`/bounty/${id}`);
      // Remove the bounty from the state
      setBounties(bounties.filter(b => b._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (bounty) => {
    // Set the bounty to be edited
    setBountyToEdit(bounty);
    // Enter edit mode
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    // Exit edit mode
    setEditMode(false);
    // Clear the bounty being edited
    setBountyToEdit(null);
  };

  return (
    <div>
      <h1>Bounty Tracker</h1>
      <div className="form-container">
        <BountyForm 
          addBounty={addBounty} 
          updateBounty={updateBounty} 
          editMode={editMode} 
          initialData={bountyToEdit}
          handleCancelEdit={handleCancelEdit}
        />
      </div>
      <div className="container">
        <h2>Bounties</h2>
        <BountyList 
          bounties={bounties} 
          updateBounty={updateBounty} 
          deleteBounty={deleteBounty}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;
