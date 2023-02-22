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
          <p>+996705000562</p>
          <p>+996772000562</p>
          <p>hello@gmail.com</p>
        </div>
        <div className="for_contacts">
          <h2>Для партнеров</h2>
          <p>+996705000562</p>
          <p>hello@gamil.com</p>
        </div>
        <div className="for_contacts">
          <h2>Работац в академии</h2>
          <p>Открытые вакансии</p>
          <p>people@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Contacts;
