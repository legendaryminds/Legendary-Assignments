import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../context/EventProvider";
import TicketForm from "../components/TicketForm";

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
      <p>Ticket Price: {event.ticketPrice > 0 ? `$${event.ticketPrice}` : "Free"}</p>
      <TicketForm />
    </div>
  );
};

export default EventPage;
