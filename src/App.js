import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import "../src/style.css";
import "../src/adaptive_style.css";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <MainRoutes />
            <Footer />
        </div>
    );
};

export default App;
