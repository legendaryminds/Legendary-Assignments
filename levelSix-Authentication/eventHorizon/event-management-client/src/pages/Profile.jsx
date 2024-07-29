import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { EventContext } from "../context/EventProvider";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

// Profile component definition
const Profile = () => {
  const { user } = useContext(AuthContext);
  const { userEvents, getUserEvents } = useContext(EventContext);

  // Fetch user-specific events when the component mounts
  useEffect(() => {
    getUserEvents();
  }, []);

  return (
    <div>
      <h1>{user.username}'s Events</h1>
      <EventForm />
      <EventList events={userEvents} />
    </div>
  );
};

export default Profile;
