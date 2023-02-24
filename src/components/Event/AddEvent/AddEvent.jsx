import React, { useContext, useReducer, useState } from "react";
import { eventContext } from "../../../contexts/EventContext";
import "./AddEvent.css";
const AddEvent = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [locat, setLocat] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const { addEvent } = useContext(eventContext);
    function handleData() {
        let obj = {
            title,
            date,
            locat,
            desc,
            img,
        };
        addEvent(obj);
    }
    return (
        <div>
            <div className="form_block">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="title"
                />
                <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    placeholder="date"
                />
                <input
                    onChange={(e) => setLocat(e.target.value)}
                    type="text"
                    placeholder="location"
                />
                <input
                    onChange={(e) => setDesc(e.target.value)}
                    type="text"
                    placeholder="description"
                />
                <input
                    onChange={(e) => setImg(e.target.value)}
                    type="text"
                    placeholder="image"
                />
                <button onClick={handleData}>add</button>
            </div>
        </div>
    );
};

export default AddEvent;
