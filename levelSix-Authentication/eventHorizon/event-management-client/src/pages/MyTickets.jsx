import React, { useEffect, useContext } from "react";
import { TicketContext } from "../context/TicketProvider";
import { Link } from "react-router-dom";

const MyTickets = () => {
  const { getUserTickets, tickets } = useContext(TicketContext);

  useEffect(() => {
    getUserTickets();
  }, [getUserTickets]);

  if (tickets.length === 0) return <div>No tickets found.</div>;

  return (
    <div>
      <h1>My Tickets</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id}>
            Event: {ticket.event.title}, Date: {new Date(ticket.event.date).toLocaleDateString()}, Venue: {ticket.event.location}, Price: {ticket.price > 0 ? `$${ticket.price}` : "Free"}
            <Link to={`/tickets/${ticket._id}`}>View Ticket</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTickets;
