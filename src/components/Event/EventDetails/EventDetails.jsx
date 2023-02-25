import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { eventContext } from "../../../contexts/EventContext";

const EventDetails = () => {
    const { id } = useParams();
    const { oneEvent, getOneEvent } = useContext(eventContext);
    useEffect(() => {
        getOneEvent(id);
    }, []);
    return (
        <div className="event-cont">
            <div
                style={{
                    width: "100%",
                    height: "400px",
                    position: "relative",
                    zIndex: 2,
                    paddingTop: "20px",
                }}
            >
                <img src={oneEvent.img} alt="" className="detail_img" />
                <h1 className="detail_title">{oneEvent.title}</h1>
                <div className="detail_info">
                    <h3>дата: {oneEvent.date}</h3>
                    <h3>локация: {oneEvent.locat}</h3>
                    <p style={{ width: "90%" }}>
                        <span
                            style={{
                                fontSize: "16px",
                                fontWeight: "700",
                                marginRight: "5px",
                            }}
                        >
                            доп.инфо:
                        </span>
                        {oneEvent.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
