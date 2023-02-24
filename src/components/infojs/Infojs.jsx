import React from "react";
// info about python
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
                      за 6 месяцев
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
                    <div>Бекбашев Адилет</div>
                  </div>
                  <div className="info_title_block-3">
                    Автор курса и глава направления
                  </div>
                  <div className="info_title_block-4"></div>
                  <div className="info_title_block-5">
                    Бекбашев Адилет Автор курса и глава направления Уже 3 года в
                    программировании. Начинала как учитель информатики, а сейчас
                    владеет Python языком. Один из самых сильных специалистов в
                    вопросах методологии обучения.
                    <br />
                    <br />
                    Именно Адилет делает всю серверную часть сайтов нашей
                    компании. Он простроил систему работы в своем департаменте,
                    при которой студенты максимально фокусируются на практику и
                    выработку soft-skills. Именно эти два блока помогают
                    выпускникам успешнее проходить этап трудоустройства. Свою
                    работу как главы направления, Дастан начал в январе 2019.
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
                <div className="li_block_h2">Python</div>
                <div className="li_block_p">
                  Начиная с самых азов, ты пройдешь весь синтактис языка,
                  необходимый для веб-разработки. С этими знаниями ты сможешь
                  создавать backend для сайтов с широким функционалом, чатботов
                  и парсеры
                </div>
                <div className="number">2</div>
              </div>
            </div>
          </li>
          <li className="li_course">
            <div>
              <div className="li_block">
                <div className="li_block_h2">ООП и Базы Данных</div>
                <div className="li_block_p">
                  Объектно-ориентированное программировнаие, алгоритмы и основы
                  MySQL — эти технологии позволят тебе писать чистый код, с
                  хорошей структурой. А это один из показателей высокой
                  квалификации программиста.
                </div>
                <div className="number">3</div>
              </div>
            </div>
          </li>
          <li className="li_course">
            <div>
              <div className="li_block">
                <div className="li_block_h2">Web-разработка</div>
                <div className="li_block_p">
                  Ты освоишь полный пакет инструментов для создания мощных
                  веб-сервисов: верстку на HTML и CSS, работу с API, Bootstrap,
                  Git, HTTP.
                </div>
                <div className="number">4</div>
              </div>
            </div>
          </li>
          <li className="li_course">
            <div>
              <div className="li_block">
                <div className="li_block_h2">Django</div>
                <div className="li_block_p">
                  Это фреймворк, который обладает огромным количеством шаблонов.
                  Его использование значительно ускоряет разработку и позволяет
                  расширить функционал
                </div>
                <div className="number">5</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* start info etap */}
      <div className="price_block1">
        <div className="price_block_mini1">
          <div className="price_block_mini-11">
            <div className="price_block_mini-21">
              <div className="prive_block_mini-h11">
                <div className="price_block_mini_h11">Стомость обучении</div>
              </div>
              <div className="info_price1">
                <h2 style={{ color: "black" }}>оффлайн обучение:</h2>
                <div className="info_price-11">
                  <div className="info_price_center1">
                    <div className="info_price_center-11">
                      <div className="info_price_center-into1">
                        — Обучение по видео-записям, с оффлайн консультациями
                        <br />
                        — Чат с менторами и команде
                        <br />
                        — Персональный отзыв на каждое задание
                        <br />
                        — Все языки программирования
                        <br />
                        — Круглосуточный коворкинг
                        <br />— 6 месяцев оффлайн обучения
                      </div>
                      <div className="info_price_center-box1"></div>
                      <div className="number_price1">
                        <div className="number_p1">10.000</div>
                        <div
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.55",
                            fontFamily: "Montserrat,Arial,sans-serif",
                            fontWeight: "400",
                            color: "#000",
                          }}
                        >
                          за курс
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "black",
                      marginTop: "5%",
                      marginBottom: "5%",
                    }}
                  ></div>
                </div>
                {/*  */}
                <h2 style={{ color: "black" }}>индивидуальное обучение:</h2>
                <div className="info_price-11">
                  <div className="info_price_center1">
                    <div className="info_price_center-11">
                      <div className="info_price_center-into1">
                        — предоставление личного ментора
                        <br />
                        — полноценный разбор всех тасков
                        <br />
                        — Персональный отзыв на каждое задание
                        <br />
                        — освоение проффесии за короткий срок
                        <br />
                        — Круглосуточный коворкинг
                        <br />— 4 месяцев оффлайн обучения
                      </div>
                      <div className="info_price_center-box1"></div>
                      <div className="number_price1">
                        <div className="number_p1">12.000</div>
                        <div
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.55",
                            fontFamily: "Montserrat,Arial,sans-serif",
                            fontWeight: "400",
                            color: "#000",
                          }}
                        >
                          за курс
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infojs;
