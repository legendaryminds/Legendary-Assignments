import React, { useState } from 'react';
import BadgeForm from './BadgeForm';
import BadgeList from './BadgeList'; 

function BadgeManager() {
  const [badges, setBadges] = useState([]);

  // adds a new badge to the list of badges

  const addBadge = (newBadge) => {
    setBadges(prevBadges => [...prevBadges, newBadge]);
  };

  const deleteBadge = (index) => {
    setBadges(prevBadges => prevBadges.filter((_, i) => i !== index));
  };
// .filter() creates a new array minus the deleted badge at the specified index
  return (
    <div>
      <h1>Badge Application</h1>
      <BadgeForm addBadge={addBadge} />
      <BadgeList badges={badges} deleteBadge={deleteBadge}/>
    </div>
  );
}

export default BadgeManager;
