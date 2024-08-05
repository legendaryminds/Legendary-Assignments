import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const EventList = ({ events, onEdit, onDelete }) => {
  if (!events.length) return <p>No events available</p>;

  return (
    <div className="event-list-container">
      <ul>
        {events.map(event => (
          <li key={event._id} className="event-item">
            <Link to={`/events/${event._id}`} className="event-title">{event.title}</Link>
            <p className="event-date">{format(new Date(event.date), 'MM/dd/yyyy')}</p>
            <p className="event-location">{event.location}</p>
            <p className="event-venue">{event.venue}</p>
            <p className="event-price">{event.ticketPrice === 0 ? "Free" : `$${event.ticketPrice}`}</p>
            {onEdit && <button onClick={() => onEdit(event)}>Edit</button>}
            {onDelete && <button onClick={() => onDelete(event._id)}>Delete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
