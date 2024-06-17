import React from 'react';

const BountyList = ({ bounties, updateBounty, deleteBounty, handleEdit }) => {
  return (
    <div>
      <ul>
        {bounties.map(bounty => (
          <li key={bounty._id}>
            <span>{bounty.firstName} {bounty.lastName} - {bounty.type} - ${bounty.bountyAmount} - {bounty.living ? 'Alive' : 'Dead'}</span>
            <button onClick={() => handleEdit(bounty)}>Edit</button>
            <button onClick={() => deleteBounty(bounty._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BountyList;
