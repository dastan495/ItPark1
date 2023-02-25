import React from "react";
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
const Home = () => {
    return (
        <div className="container">
            {/* <!-- header start  --> */}
            <header>
                <div className="header_block_left">
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
                        <img
                            className="btn__icon"
                            src={Marat}
                            alt="arrow-right"
                        />
                    </button>
                </div>
                <div className="header__block_right">
                    <img className="header__img" src={Phote} alt="" />
                </div>
            </header>
            {/* <!--  header end --> */}
            {/* <!-- why itpark start  --> */}
            <div className="services">
                <h1 className="services__title_main">Почему It park?</h1>
                <ul className="services__list">
                    <li className="services__item">
                        <img className="services__icon" src={opyt} alt="" />
                        <h3 className="services_desc">Опытные преподователи</h3>
                    </li>

                    <li className="services__item">
                        <img className="services__icon" src={free1} alt="" />
                        <h3 className="services_desc">Бесплатный коворкинг</h3>
                    </li>

                    <li className="services__item">
                        <img className="services__icon" src={free2} alt="" />

                        <h3 className="services_desc">Заморозка курса</h3>
                    </li>
                    <li className="services__item">
                        <img className="services__icon" src={free3} alt="" />

                        {/* <img className="services__icon" src="./image/icon4.png" alt="" /> */}
                        <h3 className="services_desc">
                            Стажировка за границей
                        </h3>
                    </li>

                    <li className="services__item">
                        <img className="services__icon" src={free4} alt="" />

                        {/* <img className="services__icon" src="./image//icon5.png" alt="" /> */}
                        <h3>Предоставление компьтеров</h3>
                    </li>

                    <li className="services__item">
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
                        <h1>Наши курсы</h1>
                    </div>
                    <div className="course2">
                        <div className="our_course">
                            <img src={front} alt="" />
                            <div>
                                <h3>Фронтенд разработчик</h3>
                                <p>
                                    проектирование удобных, понятных и
                                    эстетичных пользовательских интерфейсов.
                                </p>
                            </div>
                        </div>
                        <div className="our_course">
                            <img src={back} alt="" />
                            <div>
                                <h3>Бэкенд разработчик</h3>
                                проектирование удобных, понятных и эстетичных
                                пользовательских интерфейсов.
                            </div>
                        </div>
                        <div className="our_course">
                            <img src={ui} alt="" />
                            <div>
                                <h3>UI/UX Дизайнер</h3>
                                Разработка программно-административной части
                                веб-приложения.
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
                        <span style={{ color: "orange" }}>IT park</span> в
                        цифрах
                    </h1>
                </div>
                <div className="box">
                    <div className="text_result">
                        <h1>25</h1>
                        <h3>Компаний партнеров</h3>
                    </div>
                    <div className="polosa"></div>
                    <div className="text_result">
                        <h1>25</h1>
                        <h3>Компаний партнеров</h3>
                    </div>
                    <div className="polosa"></div>
                    <div className="text_result">
                        <h1>25</h1>
                        <h3>Компаний партнеров</h3>
                    </div>
                </div>
            </div>
            {/* <!-- our result end --> */}
        </div>
    );
};

export default Home;
// import React from "react";
// import "../../style.css";
// import "../../adaptive_style.css";
// import strell from "../../images/arrow-right-up.png";
// import person from "../../images/Group 162532.png";
// import icon1 from "../../images/Vector 1.png";
// import icon2 from "../../images/vector2.png";
// import icon3 from "../../images/vector3.png";
// import icon4 from "../../images/vector4.png";
// import iconPng1 from "../../images/Icon (7).png";
// import iconPng2 from "../../images/Icon (8).png";
// import iconPng3 from "../../images/Icon (9).png";
// import portfolio1 from "../../images/image 28.png";
// import portfolio2 from "../../images/image 29.png";
// import portfolio3 from "../../images/image 30.png";
// import portfolio4 from "../../images/img 31.png";
// import logofooter from "../../images/portfolio_icon_second.png";

// const Home = () => {
//   return (
//     <div className="container">
//       <header>
//         <div className="header__block_left">
//           <h2 className="header__title_left">Build Your Awesome Platform</h2>
//           <p className="header__desc_left">
//             Enver studio is a digital studio that offers several services such
//             as UI/UX Design to developers, we will provide the best service for
//             those of you who use our services.
//           </p>
//           <button className="header__btn">
//             Подробнее
//             <img className="btn__icon" src={strell} alt="arrow-right" />
//           </button>
//         </div>
//         <div className="header__block_right">
//           <img src={person} alt="header image" className="header__img" />
//           <img src={icon1} alt="error:(" className="vector" id="vector_1" />
//           <img src={icon2} alt="error:(" className="vector" id="vector_2" />
//           <img src={icon3} alt="error:(" className="vector" id="vector_3" />
//           <img src={icon4} alt="error:(" className="vector" id="vector_4" />
//         </div>
//       </header>
//       {/* // header end */}

//       {/* <!-- servisces block start --> */}
//       <div className="services">
//         <h2 className="services__title_main">The Service We Provide For You</h2>
//         <ul className="services__list">
//           <li className="services__item">
//             <img className="services__icon" src={iconPng1} alt="error" />
//             <h4 className="services__title">Development</h4>
//             <p className="services__desc">
//               Create a platform with the best and coolest quality from us.
//             </p>
//           </li>
//           <li className="services__item">
//             <img className="services__icon" src={iconPng2} alt="error" />
//             <h4 className="services__title">UI/UX Designer</h4>
//             <p className="services__desc">
//               We provide UI/UX Design services, and of course with the best
//               quality.
//             </p>
//           </li>
//           <li className="services__item">
//             <img className="services__icon" src={iconPng3} alt="error" />
//             <h4 className="services__title">Graphic Designer</h4>
//             <p className="services__desc">
//               We provide Graphic Design services, with the best designers.
//             </p>
//           </li>
//         </ul>
//       </div>
//       {/* <!-- servisces block end --> */}
//       {/* <!-- portfolio block start --> */}

//       <div className="portfolio">
//         <h4 className="portfolio__title">Our Awesome Portfolio</h4>
//         <ul className="portfolio__list">
//           <li className="portfolio__item">
//             <img src={portfolio1} alt="error" />
//           </li>
//           <li className="portfolio__item">
//             <img src={portfolio2} alt="error" />
//           </li>
//           <li className="portfolio__item">
//             <img src={portfolio3} alt="error" />
//           </li>
//         </ul>
//         <img src={portfolio4} alt="error" className="portfolio__icon" />
//       </div>

//       <img src={logofooter} alt="" className="portfolio__icon_second" />
//       {/* <!-- portfolio block end --> */}

//       {/* <!-- info block start --> */}
//       <div className="info-block">
//         <h4 className="info-block__title">
//           Contact us for the service you want to use
//         </h4>
//         <button className="info-block__btn">Contact us</button>
//       </div>
//       {/* <!-- info block end --> */}
//     </div>
//   );
// };

// export default Home;
