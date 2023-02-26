import React, { useEffect } from "react";
import Marat from "../../images/str.png";
import Phote from "../../images/фото.png";
import "./Home.css";
import opyt from "../../images/icon1.png";
import free1 from "../../images/icon2.png";
import free2 from "../../images/icon3.png";
import free3 from "../../images/icon4.png";
import free4 from "../../images/icon5.png";
import free5 from "../../images/icon6.png";
import front from "../../images/image 33 (Traced).png";
import back from "../../images/image 33 (Traced).png";
import ui from "../../images/image 35 (Traced).png";
import Slider from "./Slider";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      {/* <!-- header start  --> */}
      <header>
        <div className="header_block_left" data-aos="fade-right">
          <h2 className="header__title_left">
            IT park - это новые <br />
            возможности
          </h2>
          <p className="header__desc_left">
            Освой программирование за 6 <br />
            месяцeв по методите IT park
          </p>
          <button className="header__btn">
            Подробнее
            <img className="btn__icon" src={Marat} alt="arrow-right" />
          </button>
        </div>
        <div className="header__block_right">
          <img className="header__img" src={Phote} alt="" />
        </div>
      </header>
      {/* <!--  header end --> */}
      {/* <!-- why itpark start  --> */}
      <div className="services">
        <h1 className="services__title_main" data-aos="fade-up">
          Почему It park?
        </h1>
        <ul className="services__list">
          <li className="services__item" data-aos="fade-up">
            <img className="services__icon" src={opyt} alt="" />
            <h3 className="services_desc">Опытные преподователи</h3>
          </li>

          <li className="services__item" data-aos="fade-up">
            <img className="services__icon" src={free1} alt="" />
            <h3 className="services_desc">Бесплатный коворкинг</h3>
          </li>

          <li className="services__item" data-aos="fade-up">
            <img className="services__icon" src={free2} alt="" />

            <h3 className="services_desc">Заморозка курса</h3>
          </li>
          <li className="services__item" data-aos="fade-up">
            <img className="services__icon" src={free3} alt="" />

            {/* <img className="services__icon" src="./image/icon4.png" alt="" /> */}
            <h3 className="services_desc">Стажировка за границей</h3>
          </li>

          <li className="services__item" data-aos="fade-up">
            <img className="services__icon" src={free4} alt="" />

            {/* <img className="services__icon" src="./image//icon5.png" alt="" /> */}
            <h3>Предоставление компьтеров</h3>
          </li>

          <li className="services__item" data-aos="fade-up">
            <img className="services__icon" src={free5} alt="" />

            {/* <img className="services__icon" src="./image/icon6.png" alt="" /> */}
            <h3>Оплачиваемая стажировка</h3>
          </li>
        </ul>
      </div>
      {/* <!-- why itpark end --> */}
      {/* <!-- our course start  --> */}
      <div className="course_main">
        <div className="course_main_box">
          <div className="course_title">
            <h1 data-aos="fade-up">Наши курсы</h1>
          </div>
          <div className="course2">
            <div className="our_course" data-aos="fade-up">
              <img src={front} alt="" />
              <div>
                <h3>Фронтенд разработчик</h3>
                <p>
                  проектирование удобных, понятных и эстетичных пользовательских
                  интерфейсов.
                </p>
              </div>
            </div>
            <div className="our_course">
              <img src={back} alt="" />
              <div>
                <h3>Бэкенд разработчик</h3>
                проектирование удобных, понятных и эстетичных пользовательских
                интерфейсов.
              </div>
            </div>
            <div className="our_course" data-aos="fade-up">
              <img src={ui} alt="" />
              <div>
                <h3>UI/UX Дизайнер</h3>
                Разработка программно-административной части веб-приложения.
                {/* <!-- внутренним содержанием системы. --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- our course end --> */}
      <div className="photo_block">
        <h2>
          офис <span style={{ color: "orange" }}>it park</span>{" "}
        </h2>
        <Slider />
      </div>
      {/* <!-- our result start--> */}
      <div className="result">
        <div className="result_1">
          <h1>
            <span style={{ color: "orange" }}>IT park</span> в цифрах
          </h1>
        </div>
        <div className="box">
          <div data-aos="flip-left" className="text_result">
            <h1 style={{ color: "orange" }}>25</h1>
            <h3>Компаний партнеров</h3>
          </div>
          <div className="polosa"></div>
          <div className="text_result" data-aos="flip-left">
            <h1 style={{ color: "orange" }}>600</h1>
            <h3>Выпускников</h3>
          </div>
          <div className="polosa"></div>
          <div data-aos="flip-left" className="text_result">
            <h1 style={{ color: "orange" }}>100</h1>
            <h3>вакансий в месяц</h3>
          </div>
        </div>
      </div>
      {/* <!-- our result end --> */}
    </div>
  );
};

export default Home;
