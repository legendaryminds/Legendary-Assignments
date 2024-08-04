import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ events, onEdit, onDelete }) => {
  if (!events.length) return <p>No events available</p>;

  return (
    <div>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <Link to={`/events/${event._id}`}>{event.title}</Link>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.venue}</p>
            <p>{event.ticketPrice === 0 ? "Free" : `$${event.ticketPrice}`}</p>
            {onEdit && <button onClick={() => onEdit(event)}>Edit</button>}
            {onDelete && <button onClick={() => onDelete(event._id)}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
