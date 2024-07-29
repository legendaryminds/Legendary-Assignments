// Import necessary modules and components
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../context/EventProvider";

// EventPage component definition
const EventPage = () => {
  const { id } = useParams();
  const { event, getEventById } = useContext(EventContext);

  useEffect(() => {
    getEventById(id);
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.location}</p>
      <p>Ticket Price: ${event.ticketPrice}</p>
    </div>
  );
};

export default EventPage;