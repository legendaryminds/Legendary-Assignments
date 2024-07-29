import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

// Create the EventContext
export const EventContext = createContext();

// EventProvider component definition
const EventProvider = ({ children }) => {
    const { token, user } = useContext(AuthContext); // Get the token from AuthContext
    const [events, setEvents] = useState([]);
    const [userEvents, setUserEvents] = useState([]);
    const [event, setEvent] = useState(null);

  // Fetch all public events
    const getEvents = async () => {
    try {
      const res = await axios.get("/api/main/events", {
        headers: { Authorization: `Bearer ${token}` } // Include the token in the headers
      });
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };
    
    // Fetch user-specific events
  const getUserEvents = async () => {
    try {
      const res = await axios.get(`/api/main/events/user/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserEvents(res.data);
    } catch (error) {
      console.error("Error fetching user events", error);
    }
  };

  // Fetch a single event by ID
  const getEventById = async (id) => {
    try {
      const res = await axios.get(`/api/main/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` } // Include the token in the headers
      });
      setEvent(res.data);
    } catch (error) {
      console.error("Error fetching event", error);
    }
  };

  // Create a new event
  const createEvent = async (newEvent) => {
    try {
      const res = await axios.post("/api/main/events", newEvent, {
        headers: { Authorization: `Bearer ${token}` } // Include the token in the headers
      });
      setUserEvents([...events, res.data]);
    } catch (error) {
      console.error("Error creating event", error);
    }
  };

  return (
    <EventContext.Provider value={{ events, userEvents, event, getEvents, getUserEvents, getEventById, createEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
