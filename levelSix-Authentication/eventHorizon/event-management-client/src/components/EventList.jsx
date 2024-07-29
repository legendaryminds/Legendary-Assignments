// Import necessary modules
import React, { useContext, useEffect } from "react";
import { EventContext } from "../context/EventProvider";
import { Link } from "react-router-dom";

// EventList component definition
const EventList = () => {
  const { events, getEvents } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  if (!events.length) return <p>No events available</p>;

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <Link to={`/events/${event._id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
