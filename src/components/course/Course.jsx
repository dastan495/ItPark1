import React from "react";
import "../../style.css";
import person1 from "../../images/person1.png";
import person2 from "../../images/person2.png";
import person3 from "../../images/person3.png";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="the_main_title_course">
        <div className="the_second_title_course">
          <h1>Нарправления обучения</h1>
          <p>Профессии и курсы, на которые сейчас открыт набор</p>
        </div>
      </div>
      <p style={{ color: "black", textAlign: "center", fontSize: "1px" }}>
        here
      </p>
      <div className="main_course_block">
        <div className="block_course">
          <img src={person1} alt="" />
          <div className="info_about_course python">
            <h4>Python-разработчик</h4>
            <p>
              {/* Создает backend сайтов - их функционал, работает над
              автоматизацией процессов, сбором и обработкой данных. Может с
              легкостью создавать чатботы и парсеры.
              <br />
              <br />
              Один из самых популярных курсов для новичков. */}
              {/* Мастер создания сайтов. Умеет делать их красивыми, интерактивными,
              с большим функционалом. Профессия отлично подойдет тем, кто хочет
              фрилансить и постоянно разрабатывать новые проекты. */}
              Создает backend сайтов - их функционал, работает над
              автоматизацией процессов, сбором и обработкой данных. Может с
              легкостью создавать чатботы и парсеры.
            </p>
          </div>
          <div className="info_button ">
            <button>Записаться на курс</button>
            <button onClick={() => navigate("/infojs")}>Узнать больше</button>
          </div>
        </div>
        <div className="block_course">
          <img src={person2} alt="" />
          <div className="info_about_course">
            <h4>FrontEnd-Разработчик</h4>
            <p>
              {/* Мастер создания сайтов. Умеет делать их красивыми, интерактивными,
              с большим функционалом. Профессия отлично подойдет тем, кто хочет
              фрилансить и постоянно разрабатывать новые проекты.
              <br />
              <br />
              Один из самых популярных курсов для новичков. */}
              Мастер создания сайтов. Умеет делать их красивыми, интерактивными,
              с большим функционалом. Профессия отлично подойдет тем, кто хочет
              фрилансить
            </p>
          </div>
          <div className="info_button ">
            <button>Записаться на курс</button>
            <button onClick={() => navigate("/infopy")}>Узнать больше</button>
          </div>
        </div>
        <div className="block_course">
          <img src={person3} alt="" />
          <div className="info_about_course">
            <h4>UI/UX дизайнер</h4>
            <p>
              UI/UX дизайнер — это креативный специалист, который проектирует
              пользовательские интерфейсы. создаст дизайн в целом общео сайта
            </p>
          </div>
          <div className="info_button ">
            <button>Записаться на курс</button>
            <button onClick={() => navigate("/*")}>Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
