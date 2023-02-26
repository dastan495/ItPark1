import React from "react";
import "../../style.css";
import "./Contacts.css";
const Contacts = () => {
  return (
    <>
      <div className="container">
        <h1 style={{ fontSize: "40px" }} className="our_contacts">
          Наши контакты
        </h1>
      </div>

      <div className="the_main_block_contacts">
        <div className="for_contacts">
          <h2>Для обучения</h2>
          <p>+996999993003</p>
          <p>+996500227700</p>
          <p>itPark@gmail.com</p>
        </div>
        <div className="for_contacts">
          <h2>Для партнеров</h2>
          <p>+996776760076</p>
          <p>ItPark@gamil.com</p>
        </div>
        <div className="for_contacts">
          <h2>Работай в академии</h2>
          <p>Открытые вакансии</p>
          <p>+996779743280</p>
        </div>
      </div>
      <iframe
        className="container"
        title="12"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad0d666ff9e46ee923f1937549bf93e0e16c8d8d1e250e91090c2a6e92655e517&amp;source=constructor"
        width="1000"
        height="400"
        style={{ marginLeft: "60px", marginRight: "60px" }}
      ></iframe>
    </>
  );
};

export default Contacts;
