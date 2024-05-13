import React from 'react';
import Badge from './Badge';

function BadgeList({ badges, deleteBadge }) {
  return (
    <div>
      {badges.map((badge, index) => (
        <div key={index} className="badge-container">
          <Badge badge={badge} index={index} />
          <button className="delete-button" onClick={() => deleteBadge(index)}>Delete Badge</button>
        </div>
      ))}
    </div>
  );
}

export default BadgeList;
