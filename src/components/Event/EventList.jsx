import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN } from "../../consts";
import { useAuth } from "../../contexts/AuthContext";
import { eventContext } from "../../contexts/EventContext";
import "./eventList.css";
import Aos from "aos";
import "aos/dist/aos.css";

const EventList = ({ item }) => {
  const navigate = useNavigate();
  const { deleteEvent } = useContext(eventContext);
  const {
    user: { email },
  } = useAuth();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="event_card"
      onClick={() => navigate(`/details/${item.id}`)}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <img src={item.img} alt="" width="100%" />
      <h2>{item.title}</h2>
      <p>дата: {item.date}</p>
      {email === ADMIN && (
        <>
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
        </>
      )}
    </div>
  );
};

export default EventList;
