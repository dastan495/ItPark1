import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { eventContext } from "../../contexts/EventContext";
import "./Event.css";
import EventList from "./EventList";

const Event = () => {
  const navigate = useNavigate();
  const { getEvent, events } = useContext(eventContext);
  useEffect(() => {
    getEvent();
  }, []);
  return (
    <div className="container">
      <div className="event_title_block">
        <h1>Мероприятия и вебинары</h1>
      </div>
      <Button onClick={() => navigate("/addEvent")}>new event</Button>
      <div className="event_list">
        {events?.map((item) => (
          <EventList key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Event;
