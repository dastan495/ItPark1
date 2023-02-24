import React, { createContext, useReducer } from "react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../fire";
export const eventContext = createContext();
let INIT_STATE = {
    data: [],
    oneData: {},
};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_EVENTS":
            return { ...state, data: action.payload };
        case "GET_ONE_EVENT":
            return { ...state, oneData: action.payload };
        default:
            return state;
    }
};

const EventContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const eventRef = collection(db, "events");
    async function addEvent(event) {
        await addDoc(eventRef, event);
    }
    async function getEvent() {
        let data = await getDocs(eventRef);
        dispatch({
            type: "GET_EVENTS",
            payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        });
    }
    async function getOneEvent(id) {
        const oneDataRef = doc(db, "events", id);
        let oneData = await getDoc(oneDataRef);
        dispatch({
            type: "GET_ONE_EVENT",
            payload: oneData.data(),
        });
    }

    async function editEvent(id, event) {
        const productDocRef = doc(db, "events", id);
        await updateDoc(productDocRef, event);
        getEvent();
    }

    async function deleteEvent(id) {
        const productDocRef = doc(db, "events", id);
        await deleteDoc(productDocRef);
        getEvent();
    }
    const value = {
        addEvent,
        getEvent,
        events: state.data,
        oneEvent: state.oneData,
        getOneEvent,
        editEvent,
        deleteEvent,
    };
    return (
        <eventContext.Provider value={value}>{children}</eventContext.Provider>
    );
};

export default EventContext;
