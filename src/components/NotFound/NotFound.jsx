import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="notFoundBox">
        <div>
          <h1>404</h1>
        </div>
        <div style={{ fontSize: "30px" }}>
          Тут идут <br />
          <span style={{ color: "orange" }}>ремонтныее роботы</span>
          <br />
          пиши нам в соц сетях{" "}
          <span style={{ color: "orange" }}>ItPark.osh</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
