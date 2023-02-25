import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { eventContext } from "../../contexts/EventContext";
import "./eventList.css";

const EventList = ({ item }) => {
  const navigate = useNavigate();
  const { deleteEvent } = useContext(eventContext);
  return (
    <div className="event_card" onClick={() => navigate(`/details/${item.id}`)}>
      <img
        src={item.img}
        alt=""
        style={{
          width: "530px",
          height: "280px",

          borderRadius: "20px",
          border: "5px solid black",
        }}
      />
      <h2>{item.title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between    ",
        }}
      >
        <p>дата: {item.date}</p>
        <div>
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
      </div>
    </div>
  );
};

export default EventList;
