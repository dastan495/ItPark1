import React from "react";
import "./infojs.css";
const Infojs = () => {
  return (
    <div className="main">
      <div className="cover">
        <div className="cover_t">
          <div className="t-container">
            <div className="t-col">
              <div className="t_cover_wrapper">
                <div className="t154">
                  <div className="title">
                    <div style={{ fontSize: "72px", textAlign: "left" }}>
                      получи профессию
                      <br />
                      <span style={{ color: "orange" }}>
                        Python-разработчика
                      </span>
                      <br />
                      за 9 месяцев
                      <br />С нуля.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section_title">
          <div className="section_four">
            <div className="abult">
              <div
                style={{
                  fontSize: "42px",
                  lineHeight: "1.23",
                  color: "orange",
                  fontWeight: "400",
                }}
              >
                Что такое Python
              </div>
              <div
                style={{
                  marginTop: "34px",
                  fontSize: "17px",
                  lineHeight: "1.55",
                }}
              >
                Python — это скриптовый язык программирования. Он универсален,
                поэтому подходит для решения разнообразных задач и многих
                платформ, начиная с iOS и Android и заканчивая серверными
                операционными системами.
                <br />
                <br />
                Он используется в веб-разработке, создании десктопных и
                мобильных приложений, программировании игр, а также в аналитике
                и машинном обучении.
                <br />
                <br />
                Разработка на нем в разы быстрее, потому что приходится писать
                меньше кода, чем на Java, С# и других языках, — он отлично
                подходит новичкам.
                <br />
              </div>
            </div>
            <div className="abult">
              <div className="image_right">
                <div className="logoPy"></div>
                <div className="image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_question">
        <div className="section_box">
          <div className="section_center">
            <h1
              style={{
                color: "orange",
                marginBottom: "20px",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "40px",
                lineHeight: "1.23",
              }}
            >
              Подойдет ли тебе Python
            </h1>
            <p>
              Пройти наш профориентационный тест и узнай какое направление
              идеально для тебя
            </p>
            <button type="">Пройти тест</button>
          </div>
        </div>
      </div>
      <div className="section_about_teacher">
        <div className="info_block_1">
          <div className="info_block_son">
            {/* 1 */}
            <div className="info_block_left">
              <div className="info_block_left-1">
                <div className="info_block_left-2">
                  <div className="info_title_block_name">
                    <div>Eкатерина Смоляева</div>
                  </div>
                  <div className="info_title_block-3">
                    Автор курса и глава направления
                  </div>
                  <div className="info_title_block-4"></div>
                  <div className="info_title_block-5">
                    Екатерина Смоляева Автор курса и глава направления Уже 6 лет
                    в программировании. Начинала как учитель информатики, а
                    сейчас владеет собственным обучающим центром. Один из самых
                    сильных специалистов в вопросах методологии обучения.
                    <br />
                    <br />
                    Именно Екатерина привнесла в нашу систему
                    стартап-направления и фокус на фриланс. Она простроила
                    систему работы в своем департаменте, при которой студенты
                    максимально фокусируются на практику и выработку
                    soft-skills. Именно эти два блока помогают выпускникам
                    успешнее проходить этап трудоустройства. Свою работу как
                    главы направления, Екатерина начала в январе 2021.
                  </div>
                </div>
              </div>
            </div>
            {/* 1 */}
            <div className="info_photo">
              <div className="photes"></div>
            </div>
          </div>
        </div>
      </div>

      {/* start info etap */}
      <div className="info_etap">
        <div className="info_box_etap">
          <div className="info_title">
            <div className="info_title_box">
              <div className="info_title_box-1">
                <div className="info_title_h1">
                  <div style={{ textAlign: "center", marginBottom: "25px" }}>
                    Программа обучения
                  </div>
                  <div className="info_title_p">краткое содержание курса</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="ul_course">
          <li className="li_course">
            <div>
              <div className="li_block">
                <div className="li_block_h2">Основы программирования</div>
                <div className="li_block_p">
                  Программисты не только работают по-другому, они иначе думают.
                  В этом блоке мы расскажем тебе как быть программистом до мозга
                  костей. Пройдем основные понятия, разберемся в технологиях и
                  установим все необходимые программы.
                </div>
                <div className="number">1</div>
              </div>
            </div>
          </li>
          <li className="li_course">
            <div>
              <div className="li_block">
                <div className="li_block_h2">Основы программирования</div>
                <div className="li_block_p">
                  Программисты не только работают по-другому, они иначе думают.
                  В этом блоке мы расскажем тебе как быть программистом до мозга
                  костей. Пройдем основные понятия, разберемся в технологиях и
                  установим все необходимые программы.
                </div>
                <div className="number">2</div>
              </div>
            </div>
          </li>
          <li className="li_course">
            <div>
              <div className="li_block">
                <div className="li_block_h2">Основы программирования</div>
                <div className="li_block_p">
                  Программисты не только работают по-другому, они иначе думают.
                  В этом блоке мы расскажем тебе как быть программистом до мозга
                  костей. Пройдем основные понятия, разберемся в технологиях и
                  установим все необходимые программы.
                </div>
                <div className="number">3</div>
              </div>
            </div>
          </li>
          <li className="li_course">
            <div>
              <div className="li_block">
                <div className="li_block_h2">Основы программирования</div>
                <div className="li_block_p">
                  Программисты не только работают по-другому, они иначе думают.
                  В этом блоке мы расскажем тебе как быть программистом до мозга
                  костей. Пройдем основные понятия, разберемся в технологиях и
                  установим все необходимые программы.
                </div>
                <div className="number">4</div>
              </div>
            </div>
          </li>
          <li className="li_course">
            <div>
              <div className="li_block">
                <div className="li_block_h2">Основы программирования</div>
                <div className="li_block_p">
                  Программисты не только работают по-другому, они иначе думают.
                  В этом блоке мы расскажем тебе как быть программистом до мозга
                  костей. Пройдем основные понятия, разберемся в технологиях и
                  установим все необходимые программы.
                </div>
                <div className="number">5</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* start info etap */}
      <div className="price_block">
        <div className="price_block_mini">
          <div className="price_block_mini-1">
            <div className="price_block_mini-2">
              <div className="prive_block_mini-h1">
                <div className="price_block_mini_h1">Стомость обучении</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infojs;
