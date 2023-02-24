import React from "react";
import "../../style.css";
import "./Contacts.css";
const Contacts = () => {
  return (
    <>
      <div className="container">
        <h1 className="our_contacts">Наши контакты</h1>
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
    </>
  );
};

export default Contacts;
