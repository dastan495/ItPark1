import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { eventContext } from "../../contexts/EventContext";

const EventList = ({ item }) => {
  const navigate = useNavigate();
  const { deleteEvent } = useContext(eventContext);
  return (
    <div className="event_card" onClick={() => navigate(`/details/${item.id}`)}>
      <img src={item.img} alt="" width="400px" />
      <h2>{item.title}</h2>
      <p>дата: {item.date}</p>
      <button
        onClick={(e) => {
          deleteEvent(item.id);
          e.stopPropagation();
        }}
        className="admin_btn"
      >
        delete
      </button>
      <button
        onClick={(e) => {
          navigate(`/edit/${item.id}`);
          e.stopPropagation();
        }}
        className="admin_btn"
        style={{ marginLeft: "10px" }}
      >
        edit
      </button>
    </div>
  );
};

export default EventList;
