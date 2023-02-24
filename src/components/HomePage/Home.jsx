import React from "react";
import "../../style.css";
import "../../adaptive_style.css";
import strell from "../../images/arrow-right-up.png";
import person from "../../images/Group 162532.png";
import icon1 from "../../images/Vector 1.png";
import icon2 from "../../images/vector2.png";
import icon3 from "../../images/vector3.png";
import icon4 from "../../images/vector4.png";
import iconPng1 from "../../images/Icon (7).png";
import iconPng2 from "../../images/Icon (8).png";
import iconPng3 from "../../images/Icon (9).png";
import portfolio1 from "../../images/image 28.png";
import portfolio2 from "../../images/image 29.png";
import portfolio3 from "../../images/image 30.png";
import portfolio4 from "../../images/img 31.png";
import logofooter from "../../images/portfolio_icon_second.png";

const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="header__block_left">
          <h2 className="header__title_left">Build Your Awesome Platform</h2>
          <p className="header__desc_left">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <button className="header__btn">
            Подробнее
            <img className="btn__icon" src={strell} alt="arrow-right" />
          </button>
        </div>
        <div className="header__block_right">
          <img src={person} alt="header image" className="header__img" />
          <img src={icon1} alt="error:(" className="vector" id="vector_1" />
          <img src={icon2} alt="error:(" className="vector" id="vector_2" />
          <img src={icon3} alt="error:(" className="vector" id="vector_3" />
          <img src={icon4} alt="error:(" className="vector" id="vector_4" />
        </div>
      </header>
      {/* // header end */}

      {/* <!-- servisces block start --> */}
      <div className="services">
        <h2 className="services__title_main">The Service We Provide For You</h2>
        <ul className="services__list">
          <li className="services__item">
            <img className="services__icon" src={iconPng1} alt="error" />
            <h4 className="services__title">Development</h4>
            <p className="services__desc">
              Create a platform with the best and coolest quality from us.
            </p>
          </li>
          <li className="services__item">
            <img className="services__icon" src={iconPng2} alt="error" />
            <h4 className="services__title">UI/UX Designer</h4>
            <p className="services__desc">
              We provide UI/UX Design services, and of course with the best
              quality.
            </p>
          </li>
          <li className="services__item">
            <img className="services__icon" src={iconPng3} alt="error" />
            <h4 className="services__title">Graphic Designer</h4>
            <p className="services__desc">
              We provide Graphic Design services, with the best designers.
            </p>
          </li>
        </ul>
      </div>
      {/* <!-- servisces block end --> */}
      {/* <!-- portfolio block start --> */}

      <div className="portfolio">
        <h4 className="portfolio__title">Our Awesome Portfolio</h4>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <img src={portfolio1} alt="error" />
          </li>
          <li className="portfolio__item">
            <img src={portfolio2} alt="error" />
          </li>
          <li className="portfolio__item">
            <img src={portfolio3} alt="error" />
          </li>
        </ul>
        <img src={portfolio4} alt="error" className="portfolio__icon" />
      </div>

      <img src={logofooter} alt="" className="portfolio__icon_second" />
      {/* <!-- portfolio block end --> */}

      {/* <!-- info block start --> */}
      <div className="info-block">
        <h4 className="info-block__title">
          Contact us for the service you want to use
        </h4>
        <button className="info-block__btn">Contact us</button>
      </div>
      {/* <!-- info block end --> */}
    </div>
  );
};

export default Home;
