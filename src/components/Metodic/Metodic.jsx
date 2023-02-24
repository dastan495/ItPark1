import React from "react";
import "./Metodic.css";
// import "../../style.css";
import logoasd from "./metodicimage/first.svg";
const Metodic = () => {
    return (
        <>
            <div className="container__attachment">
                <div className="attachment__body">
                    <div className="attachment__body-text">
                        <h1>Присоединяйся на любом этапе</h1>
                        <div className="border__line"></div>
                        <div className="attachment__body-text_p p-text">
                            <p>
                                Если ты уже знаешь основы какого-то языка
                                программирования — можно пропустить первые
                                месяцы обучения. Для этого мы разработали
                                специальные тесты, которые помогут определить к
                                какому этапу тебя стоит подключить
                            </p>
                        </div>
                        <div className="attachment__body-btn">
                            <a href="#">Запросить тест</a>
                        </div>
                    </div>
                </div>
                <div className="attachment__footer"></div>
            </div>
            <div className="flex__container">
                <div className="flex__container-text">
                    <h1>
                        Методика <span>обучения</span>
                    </h1>
                    <p>
                        Летом 2020 года мы внедрили уникальную систему обучения,
                        не имеющую аналогов на территории СНГ
                    </p>
                </div>
                <div className="parent">
                    <div className="div1">
                        <div className="flex__childs-items">
                            <img
                                width="74px"
                                height="75px"
                                src={<logoasd />}
                                alt=""
                            />
                            <h3>Старт с самого нуля</h3>
                            <p>
                                Если ты до этого никогда не изучал
                                программирование — тебе не будет тяжело. Ведь мы
                                начинаем с самых азов: от установки нужных
                                программ и базового синтаксиса, до реальных
                                проектов с нуля.
                            </p>
                        </div>
                    </div>
                    <div className="div2">
                        <div className="flex__childs-items">
                            <img
                                width="74px"
                                height="75px"
                                src="./icons8-globe-100.png"
                                alt=""
                            />
                            <h3>Старт с самого нуля</h3>
                            <p>
                                Если ты до этого никогда не изучал
                                программирование — тебе не будет тяжело. Ведь мы
                                начинаем с самых азов: от установки нужных
                                программ и базового синтаксиса, до реальных
                                проектов с нуля.
                            </p>
                        </div>
                    </div>
                    {/* <div className="div3">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Старт с самого нуля</h3>
              <p>
                Если ты до этого никогда не изучал программирование — тебе не
                будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
                программ и базового синтаксиса, до реальных проектов с нуля.
              </p>
            </div>
          </div>
          <div className="div4">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Старт с самого нуля</h3>
              <p>
                Если ты до этого никогда не изучал программирование — тебе не
                будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
                программ и базового синтаксиса, до реальных проектов с нуля.
              </p>
            </div>
          </div>
          <div className="div5">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Старт с самого нуля</h3>
              <p>
                Если ты до этого никогда не изучал программирование — тебе не
                будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
                программ и базового синтаксиса, до реальных проектов с нуля.
              </p>
            </div>
          </div>
          <div className="div6">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Старт с самого нуля</h3>
              <p>
                Если ты до этого никогда не изучал программирование — тебе не
                будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
                программ и базового синтаксиса, до реальных проектов с нуля.
              </p>
            </div>
          </div>
          <div className="div7">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Старт с самого нуля</h3>
              <p>
                Если ты до этого никогда не изучал программирование — тебе не
                будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
                программ и базового синтаксиса, до реальных проектов с нуля.
              </p>
            </div>
          </div>
          <div className="div8">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Старт с самого нуля</h3>
              <p>
                Если ты до этого никогда не изучал программирование — тебе не
                будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
                программ и базового синтаксиса, до реальных проектов с нуля.
              </p>
            </div>
          </div>
          <div className="div9">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Старт с самого нуля</h3>
              <p>
                Если ты до этого никогда не изучал программирование — тебе не
                будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
                программ и базового синтаксиса, до реальных проектов с нуля.
              </p>
            </div>
          </div> */}
                </div>
            </div>
        </>
    );
};

export default Metodic;
