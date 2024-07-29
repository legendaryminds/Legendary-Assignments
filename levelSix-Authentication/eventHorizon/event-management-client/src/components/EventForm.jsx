import React, { useState, useContext } from "react";
import { EventContext } from "../context/EventProvider";

const EventForm = () => {
  const { createEvent } = useContext(EventContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    ticketPrice: "", // Add ticketPrice to form state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(formData);
    setFormData({
      title: "",
      description: "",
      date: "",
      location: "",
      ticketPrice: "", // Reset ticketPrice field
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Event Title"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Event Description"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Event Location"
        required
      />
      <input
        type="number"
        name="ticketPrice"
        value={formData.ticketPrice}
        onChange={handleChange}
        placeholder="Ticket Price"
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
