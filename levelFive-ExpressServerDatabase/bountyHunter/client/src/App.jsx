import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BountyList from './components/BountyList';
import BountyForm from './components/BountyForm';

const App = () => {
  const [bounties, setBounties] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [bountyToEdit, setBountyToEdit] = useState(null);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        const response = await axios.get('/bounty');
        setBounties(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBounties();
  }, []);

  const addBounty = async (bounty) => {
    try {
      const response = await axios.post('/bounty', bounty);
      setBounties([...bounties, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updateBounty = async (id, updatedBounty) => {
    try {
      const response = await axios.put(`/bounty/${id}`, updatedBounty);
      setBounties(bounties.map(b => b._id === id ? response.data : b));
      setEditMode(false);
      setBountyToEdit(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBounty = async (id) => {
    try {
      await axios.delete(`/bounty/${id}`);
      setBounties(bounties.filter(b => b._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (bounty) => {
    setBountyToEdit(bounty);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
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
