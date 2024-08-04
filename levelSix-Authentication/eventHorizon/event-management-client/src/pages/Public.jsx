import React, { useEffect, useContext } from "react";
import { EventContext } from "../context/EventProvider";
import EventList from "../components/EventList";

const Public = () => {
  const { events, getEvents } = useContext(EventContext);

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
