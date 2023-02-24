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
                        <img
                            src="https://img.icons8.com/ios11/600/228BE6/instagram-new.png"
                            alt="l"
                        />
                        <img
                            src="https://img.icons8.com/ios11/600/228BE6/instagram-new.png"
                            alt="l"
                        />
                        <img
                            src="https://img.icons8.com/ios11/600/228BE6/instagram-new.png"
                            alt="l"
                        />
                        <img
                            src="https://img.icons8.com/ios11/600/228BE6/instagram-new.png"
                            alt="l"
                        />
                        <img
                            src="https://img.icons8.com/ios11/600/228BE6/instagram-new.png"
                            alt="l"
                        />
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
