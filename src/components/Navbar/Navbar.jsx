import React, { useState } from "react";
import "../../style.css";
import "../../adaptive_style.css";
import logo from "../../images/it park.png";
import { useNavigate } from "react-router-dom";
import Auth from "../Auth/Auth";
import { useAuth } from "../../contexts/AuthContext";
import proger from "../../images/proger.png";
const Navbar = () => {
    const navigate = useNavigate();
    const [modalState, setModalState] = useState(false);
    const {
        user: { email },
        handleLogout,
    } = useAuth();
    function openModal() {
        setModalState(true);
    }
    function closeModal() {
        setModalState(false);
    }
    return (
        <div className="container">
            <div className="navbar">
                <img className="navbar__logo" src={logo} alt="navbar logo" />
                <ul className="navbar__list">
                    <li className="list__item">
                        <a onClick={() => navigate("/")} href="#">
                            главная
                        </a>
                    </li>
                    <li className="list__item">
                        <a onClick={() => navigate("/course")} href="#">
                            курсы
                        </a>
                    </li>
                    <li className="list__item">
                        <a
                            onClick={() => {
                                navigate("/metodic");
                                console.log("work");
                            }}
                            href="#"
                        >
                            методика
                        </a>
                    </li>
                    <li className="list__item">
                        <a onClick={() => navigate("/contacts")} href="#">
                            контакты
                        </a>
                    </li>
                    <li className="list__item">
                        <a onClick={() => navigate("/event")} href="#">
                            вебинары
                        </a>
                    </li>
                </ul>
                {/* <input type="text" className="navbar__input" /> */}
                {email ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                            style={{ width: "40px", marginRight: "10px" }}
                            src={proger}
                            alt="dd"
                        />
                        <button className="auth__button" onClick={handleLogout}>
                            выйти
                        </button>
                    </div>
                ) : (
                    <button className="auth__button" onClick={openModal}>
                        войти
                    </button>
                )}

                <img
                    src="./images/burger_btn.png"
                    alt=""
                    className="navbar__btn_burger"
                />
            </div>
            {modalState && (
                <div onClick={closeModal} className="modal__auth">
                    <Auth closeModal={closeModal} />
                </div>
            )}

            {/* <!-- navbar end --> */}
        </div>
    );
};

export default Navbar;
