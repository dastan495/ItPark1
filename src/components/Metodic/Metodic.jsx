import React from "react";
import "./Metodic.css";
// import "../../style.css";
import logoasd from "./metodicimage/first.svg";
import LanguageIcon from "@mui/icons-material/Language";
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
                Если ты уже знаешь основы какого-то языка программирования —
                можно пропустить первые месяцы обучения. Для этого мы
                разработали специальные тесты, которые помогут определить к
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
            Летом 2020 года мы внедрили уникальную систему обучения, не имеющую
            аналогов на территории СНГ
          </p>
        </div>
        <div className="parent">
          <div className="div1">
            <div className="flex__childs-items">
              <img width="74px" height="75px" src={<logoasd />} alt="" />
              <h3>Старт с самого нуля</h3>
              <p>
                Если ты до этого никогда не изучал программирование — тебе не
                будет тяжело. Ведь мы начинаем с самых азов: от установки нужных
                программ и базового синтаксиса, до реальных проектов с нуля.
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
              <h3>Командное обучение</h3>
              <p>
                Все студенты формируются в команды из 5 человек. Это помогает
                создавать более качественные проекты во время обучения и готовит
                к реалиям IT-компаний.
              </p>
            </div>
          </div>
          <div className="div3">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Упор на практику</h3>
              <p>
                Более 60% обучения - работа над проектами. Ты будешь кодить не
                только дома, но и прямо на уроках. К концу курса это позволит
                сформировать настоящее партфолио работ.
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
              <h3>Внимание каждому студенту</h3>
              <p>
                Мы формируем небольшие группы - по 25 человек. Такую группу
                курирует 2 ментора и 1 глава направления. Это позволяет уделить
                персональное внимание каждому. Ответы на вопросы, поддержка в
                чате, персональные интервью и индивидуальная проверка домашних
                заданий и экзаменов - все включено.
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
              <h3>Доступ 24/7</h3>
              <p>
                Все учебные материалы и записи уроков, доступны тебе
                круглосуточно. Учись в темпе, который подходит лично тебе.
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
              <h3> профессиональные курсы </h3>
              <p>
                Если у тебя достаточно времени и сил, чтобы освоить сразу
                несколько направлений - мы не против! Поступая в Академию на
                6-месячный курс по IT профессии, ты получаешь доступ ко всем
                курсам своего потока. Опережаешь программу по Java - изучи
                Frontend!
              </p>
            </div>
          </div>
          {/* <div class="div7">
            <div class="flex__childs-items">
          <div className="div7">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Тренинги, тимбилдинги и хакатоны</h3>
              <p>
                Помимо уроков, тебя ждут ежемесячные тимбилдинги и тренинги от
                крутых разработчиков. Каждые три месяца, ты будешь прокачиваться
                на хакатонах и технических интервью.
              </p>
            </div>
          </div> */}
          {/* <div class="div8">
            <div class="flex__childs-items">
          </div>
          <div className="div8">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Три ментора вместо одного</h3>
              <p>
                В каждом направлении ты имеешь доступ сразу к трем специалистам
                - автору курса, ментору и ревьюверу. Каждый из них отвечает за
                отдельную часть обучения. Такое разделение обязанностей помогает
                повысить качество процесса и дает тебе возможность пообщаться
                сразу с тремя разработчиками разного уровня.
              </p>
            </div>
          </div> */}
          {/* <div class="div9">
            <div class="flex__childs-items">
          </div>
          <div className="div9">
            <div className="flex__childs-items">
              <img
                width="74px"
                height="75px"
                src="./icons8-globe-100.png"
                alt=""
              />
              <h3>Коворкинг</h3>
              <p>
                Пространство, где тебя ничего не будет отвлекать. Приходи в
                любое время и работай с командой или самостоятельно. Здесь тебя
                всегда ждут скоростной интернет, удобное рабочее место, горячий
                чай и уютная команда нашей Академии
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Metodic;
