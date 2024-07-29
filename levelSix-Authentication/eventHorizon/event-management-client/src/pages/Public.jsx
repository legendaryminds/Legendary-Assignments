// Import necessary modules
import React, { useEffect, useContext } from "react";
import { EventContext } from "../context/EventProvider";
import EventList from "../components/EventList";

// Public component definition
const Public = () => {
  const { events, getEvents } = useContext(EventContext);

  // Fetch events when the component mounts
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <h1>Public Events</h1>
      <EventList events={events} />
    </div>
  );
};

export default Public;
