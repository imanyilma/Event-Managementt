import React, { createContext, useContext, useState } from "react";

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [drafts, setDrafts] = useState([]);

  const addEvent = (event) => {
    setEvents((prev) => [...prev, { id: Date.now(), ...event }]);
  };

  const saveDraft = (draft) => {
    setDrafts((prev) => [...prev, { id: Date.now(), ...draft }]);
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, drafts, saveDraft }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
