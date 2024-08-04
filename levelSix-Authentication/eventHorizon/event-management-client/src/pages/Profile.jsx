// Profile.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { EventContext } from "../context/EventProvider";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { userEvents, getUserEvents, deleteEvent, updateEvent } = useContext(EventContext);
  const [eventToEdit, setEventToEdit] = useState(null);

  // Fetch user-specific events when the user changes or component mounts
  useEffect(() => {
    if (user) {
      getUserEvents();
    }
  }, [user, getUserEvents]);

  const handleEdit = (event) => {
    setEventToEdit(event);
  };

  const handleDelete = (id) => {
    deleteEvent(id);
  };

  const clearEdit = () => {
    setEventToEdit(null);
  };

  if (!userEvents.length) { // Ensure userEvents is an array
    return <div>Loading events...</div>;
  }

  return (
    <div>
      <h1>{user.username}'s Events</h1>
      <EventForm eventToEdit={eventToEdit} clearEdit={clearEdit} updateEvent={updateEvent} />
      <h2>{user.username}'s Events</h2>
      <EventList events={userEvents} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Profile;
