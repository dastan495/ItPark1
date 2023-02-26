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
          <p>+996 999 99 30 03</p>
          <p>+996 500 22 77 00</p>
          <p>itPark@gmail.com</p>
        </div>
        <div className="for_contacts">
          <h2>Для партнеров</h2>
          <p>+996 776 76 00 76</p>
          <p>ItPark@gamil.com</p>
        </div>
        <div className="for_contacts">
          <h2>Работай в академии</h2>
          <p>Открытые вакансии</p>
          <p>+996 779 74 32 80</p>
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=72.797632%2C40.529418&mode=search&oid=42215085764&ol=biz&z=16.36"
          width="100%"
          height="400px"
          // frameborder="1"
          // allowfullscreen="true"
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </>
  );
};

export default Contacts;
