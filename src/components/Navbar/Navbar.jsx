import React from "react";
import "../../style.css";
import "../../adaptive_style.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            {/* burger start  */}
            {/* <div className="burger-menu">
        <div className="burger-menu__content">
          <img src={logo} className="burger-menu__btn_close" alt="" />
          <input type="text" className="burger-menu__input" />
          <ul className="burger-menu__list">
            <li className="burger-menu__item">
              <a href="#">home</a>
            </li>
            <li className="burger-menu__item">
              <a href="#">Services</a>
            </li>
            <li className="burger-menu__item">
              <a href="#">Our Project</a>
            </li>
            <li className="burger-menu__item">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </div> */}
            {/* burger end  */}
            {/* <!-- navbar start --> */}
            <div className="navbar">
                <img className="navbar__logo" src={logo} alt="navbar logo" />
                <ul className="navbar__list">
                    <li className="list__item">
                        <a onClick={() => navigate("/")} href="#">
                            Главная
                        </a>
                    </li>
                    <li className="list__item">
                        <a onClick={() => navigate("/course")} href="">
                            курсы
                        </a>
                    </li>
                    <li className="list__item">
                        <a onClick={() => navigate("/metodic")} href="">
                            методика
                        </a>
                    </li>
                    <li className="list__item">
                        <a onClick={() => navigate("/price")} href="">
                            цена
                        </a>
                    </li>
                    <li className="list__item">
                        <a onClick={() => navigate("contacts")} href="">
                            контакты
                        </a>
                    </li>
                </ul>
                <input type="text" className="navbar__input" />
                <img
                    src="./images/burger_btn.png"
                    alt=""
                    className="navbar__btn_burger"
                />
            </div>
            {/* <!-- navbar end --> */}
        </div>
    );
};

export default Navbar;
