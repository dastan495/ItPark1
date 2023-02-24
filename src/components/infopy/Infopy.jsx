import React from "react";
// info about javas
import "./infopy.css";
const infopy = () => {
  return (
    <div className="main1">
      <div className="cover1">
        <div className="cover_t1">
          <div className="t-container1">
            <div className="t-col1">
              <div className="t_cover_wrapper1">
                <div className="t1541">
                  <div className="title1">
                    <div style={{ fontSize: "72px", textAlign: "left" }}>
                      получи профессию
                      <br />
                      <span style={{ color: "orange" }}>
                        Frontend-разработчика
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
      <div className="section1">
        <div className="section_title1">
          <div className="section_four1">
            <div className="abult1">
              <div
                style={{
                  fontSize: "42px",
                  lineHeight: "1.23",
                  color: "orange",
                  fontWeight: "400",
                }}
              >
                Что такое Frontend
              </div>
              <div
                style={{
                  marginTop: "34px",
                  fontSize: "17px",
                  lineHeight: "1.55",
                }}
              >
                Это всё, что ты видишь и кликаешь на сайте или в приложении -
                картинки, кнопочки, анимации и даже бесячая реклама.
                <br />
                <br />
                Самые главные инструменты frontend разработки сайтов это
                JavaScript, HTML и CSS.
                <br />
                <br />
                В Кыргызстане фронтенд-разработчики востребованы практически в
                каждой IT-компании. Это также одно из самых популярных
                направлений для фриланса и удаленной работы. Все потому, что в
                современном мире сайт нужен каждому
                <br />
                <br />
                Пройти тест, чтобы узнать подходит ли тебе Frontend
              </div>
            </div>
            <div className="abult1">
              <div className="image_right1">
                <div className="logoPy1"></div>
                <div className="image1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_question1">
        <div className="section_box1">
          <div className="section_center1">
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
              Подойдет ли тебе Frontend
            </h1>
            <p>
              Пройти наш профориентационный тест и узнай какое направление
              идеально для тебя
            </p>
            <button type="">Пройти тест</button>
          </div>
        </div>
      </div>
      <div className="section_about_teacher1">
        <div className="info_block_11">
          <div className="info_block_son1">
            {/* 1 */}
            <div className="info_block_left1">
              <div className="info_block_left-11">
                <div className="info_block_left-21">
                  <div className="info_title_block_name1">
                    <div>Канатбек уулу Дастан</div>
                  </div>
                  <div className="info_title_block-31">
                    Автор курса и глава направления
                  </div>
                  <div className="info_title_block-41"></div>
                  <div className="info_title_block-51">
                    Канатбек уулу Дастан ваш ментор и глава направления Уже 3
                    года в программировании. Начинала как финансист информатики,
                    а сейчас перешел в It направление. Один из хороших сильных
                    специалистов в вопросах методологии обучения.
                    <br />
                    <br />
                    Именно Дастан привнесла в нашу систему стартап-направления и
                    фокус на фриланс. Он простроил систему работы в своем
                    департаменте, при которой студенты максимально фокусируются
                    на практику и выработку soft-skills. Именно эти два блока
                    помогают выпускникам успешнее проходить этап
                    трудоустройства. Свою работу как главы направления, Дастан
                    начала в январе 2021.
                  </div>
                </div>
              </div>
            </div>
            {/* 1 */}
            <div className="info_photo1">
              <div className="photes1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* start info etap */}
      <div className="info_etap1">
        <div className="info_box_etap1">
          <div className="info_title1">
            <div className="info_title_box1">
              <div className="info_title_box-11">
                <div className="info_title_h11">
                  <div style={{ textAlign: "center", marginBottom: "25px" }}>
                    Программа обучения
                  </div>
                  <div className="info_title_p1">краткое содержание курса</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="ul_course1">
          <li className="li_course1">
            <div>
              <div className="li_block1">
                <div className="li_block_h21">Основы программирования</div>
                <div className="li_block_p1">
                  Программисты не только работают по-другому, они иначе думают.
                  В этом блоке мы расскажем тебе как быть программистом до мозга
                  костей. Пройдем основные понятия, разберемся в технологиях и
                  установим все необходимые программы.
                </div>
                <div className="number1">1</div>
              </div>
            </div>
          </li>
          <li className="li_course1">
            <div>
              <div className="li_block1">
                <div className="li_block_h21">HTML</div>
                <div className="li_block_p1">
                  Язык, который отвечает за содержимое сайта - тексты, картинки,
                  ссылки и тд. Ты научишься правильно писать семантику страницы
                  и отработаешь весь функционал на практике.
                </div>
                <div className="number1">2</div>
              </div>
            </div>
          </li>
          <li className="li_course1">
            <div>
              <div className="li_block1">
                <div className="li_block_h21">CSS</div>
                <div className="li_block_p1">
                  CSS позволит тебе создавать красоту. Цвета, переходы, анимации
                  - заслуга этого блока. Здесь твой внутренний дизайнер
                  соединится с программистом для создания прекрасного.
                </div>
                <div className="number1">3</div>
              </div>
            </div>
          </li>
          <li className="li_course1">
            <div>
              <div className="li_block1">
                <div className="li_block_h21">JavaScript</div>
                <div className="li_block_p1">
                  Вот тут начинается настоящее программирование. Ты изучишь
                  алгоритмы, ООП, работу с API, синхронный и асинхронный код. И
                  подробно разберешь синтаксис самого JS
                </div>
                <div className="number1">4</div>
              </div>
            </div>
          </li>
          <li className="li_course1">
            <div>
              <div className="li_block1">
                <div className="li_block_h21">React</div>
                <div className="li_block_p1">
                  Это фреймворк, которым владеет каждый хороший frontend
                  разработчик. Он помогает создавать пользовательские интерфейс,
                  удобно связывая JS и HTML
                </div>
                <div className="number1">5</div>
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

export default infopy;
