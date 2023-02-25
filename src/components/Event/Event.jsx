import { Button, styled } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { eventContext } from "../../contexts/EventContext";
import "./Event.css";
import EventList from "./EventList";
import { ButtonProps } from "@mui/material/Button";
import { orange } from "@mui/material/colors";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../consts";

const Event = () => {
    const navigate = useNavigate();
    const { getEvent, events } = useContext(eventContext);
    const {
        user: { email },
    } = useAuth();
    useEffect(() => {
        getEvent();
    }, []);
    const ColorButton = styled(Button)(({ theme }) => ({
        // color: theme.palette.getContrastText(orange[500]),
        color: "white",
        backgroundColor: orange[500],
        "&:hover": {
            backgroundColor: orange[700],
        },
        marginLeft: "30px",
        marginTop: "50px",
    }));
    return (
        <div className="">
            {/* <div className="event_title_block">
                <h1>Мероприятия и вебинары</h1>
            </div> */}
            <div
                className="container__attachment"
                style={{
                    // height: "500px",
                    backgroundImage:
                        "url(https://digitalagencynetwork.com/wp-content/uploads/2021/10/top-technology-events-you-should-attend-1.jpg)",
                }}
            >
                <div className="attachment__body">
                    <div className="attachment__body-text">
                        <h1>учавствуй на наших ивентах</h1>
                        <div className="border__line"></div>
                        <div className="attachment__body-text_p p-text">
                            <p>
                                Если ты уже знаешь основы какого-то языка
                                программирования — можно пропустить первые
                                месяцы обучения. Для этого мы разработали
                                специальные тесты, которые помогут определить к
                                какому этапу тебя стоит подключить
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="attachment__footer"></div> */}
            </div>
            <div className="event_list">
                {events?.map((item) => (
                    <EventList key={item.id} item={item} />
                ))}
            </div>
            {email === ADMIN && (
                <ColorButton onClick={() => navigate("/addEvent")}>
                    new event
                </ColorButton>
            )}
        </div>
    );
};

export default Event;
