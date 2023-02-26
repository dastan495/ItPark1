import React from "react";
import "../../style.css";
import "../../adaptive_style.css";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container_about_footer">
        <div className="about_title">
          <h3>соцсети</h3>
          <div className="logo_footer">
            <a href="">
              {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                alt="l"
              />
            </a>
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/134/134937.png"
                alt="l"
              />
            </a>
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                alt="l"
              />
            </a>
            <a href="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/270/270021.png"
                alt="l"
              />
            </a>
          </div>
        </div>
        <div className="about_title">
          <h3>ссылки</h3>
          <p>вступительный тест</p>
          <p>вступительный тест</p>
          <p>зачисление на курс</p>
        </div>
        <div className="about_title">
          <h3>курсы</h3>
          <p>вступительный тест</p>
          <p>вступительный тест</p>
          <p>зачисление на курс</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
