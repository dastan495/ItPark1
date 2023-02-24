import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { eventContext } from "../../../contexts/EventContext";

const EditEvent = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [locat, setLocat] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const { oneEvent, editEvent, getOneEvent } = useContext(eventContext);
    const { id } = useParams();
    useEffect(() => {
        getOneEvent(id);
    }, []);
    useEffect(() => {
        if (oneEvent) {
            setTitle(oneEvent.title);
            setDate(oneEvent.date);
            setLocat(oneEvent.locat);
            setDesc(oneEvent.desc);
            setImg(oneEvent.img);
            console.log(oneEvent);
        }
    }, [oneEvent]);

    function handleData() {
        let obj = {
            title,
            date,
            locat,
            desc,
            img,
        };
        editEvent(id, obj);
    }
    return (
        <div>
            <div className="form_block">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="title"
                />
                <input
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    type="date"
                    placeholder="date"
                />
                <input
                    onChange={(e) => setLocat(e.target.value)}
                    value={locat}
                    type="text"
                    placeholder="location"
                />
                <input
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    type="text"
                    placeholder="description"
                />
                <input
                    onChange={(e) => setImg(e.target.value)}
                    value={img}
                    type="text"
                    placeholder="image"
                />
                <button onClick={handleData}>edit</button>
            </div>
        </div>
    );
};

export default EditEvent;
