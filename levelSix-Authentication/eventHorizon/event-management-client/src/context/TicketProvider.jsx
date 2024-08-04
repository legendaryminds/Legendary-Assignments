import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const TicketContext = createContext();

const ticketAxios = axios.create({
  baseURL: "/api/main",
});

ticketAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const TicketProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);

  const getUserTickets = useCallback(async () => {
    try {
      const res = await ticketAxios.get(`/tickets/user`);
      const fetchedTickets = await Promise.all(res.data.map(async ticket => {
        const eventRes = await ticketAxios.get(`/events/${ticket.eventId}`);
        return { ...ticket, event: eventRes.data };
      }));
      setTickets(fetchedTickets);
    } catch (error) {
      console.error("Error fetching user tickets", error.response ? error.response.data : error.message);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      getUserTickets();
    }
  }, [user, getUserTickets]);

  const getTicketById = async (ticketId) => {
    try {
      const res = await ticketAxios.get(`/tickets/ticket/${ticketId}`);
      const eventRes = await ticketAxios.get(`/events/${res.data.eventId}`);
      return { ...res.data, event: eventRes.data };
    } catch (error) {
      console.error("Error fetching ticket by ID", error);
      throw error;
    }
  };

  return (
    <TicketContext.Provider value={{ tickets, getUserTickets, getTicketById }}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
