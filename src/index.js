import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContext";
import EventContext from "./contexts/EventContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
        <EventContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </EventContext>
    </AuthContextProvider>
);
