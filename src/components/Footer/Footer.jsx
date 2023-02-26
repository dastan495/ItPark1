import React from "react";
import "../../style.css";
import "../../adaptive_style.css";
import "./Footer.css";
import logo from "../../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const nav = useNavigate();
  return (
    <footer>
      <div className="container_about_footer">
        <div className="about_title">
          <h3>соцсети</h3>
          <div className="logo_footer">
            <FacebookIcon fontSize="large" />
            <YouTubeIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <WhatsAppIcon fontSize="large" />
            <TelegramIcon fontSize="large" />
          </div>
        </div>
        <div className="about_title">
          <h3>ссылки</h3>
          <p onClick={() => nav("/course")}>курсы</p>
          <p onClick={() => nav("/metodic")}>методика</p>
          <p onClick={() => nav("/event")}>вебинары</p>
        </div>
        <div className="about_title">
          <h3>курсы</h3>
          <p onClick={() => nav("/infojs")}>frontend</p>
          <p onClick={() => nav("/infopy")}>backend</p>
          <p onClick={() => nav("/infopy")}>UI/UX</p>
        </div>
        <div className="about_title forma">
          <h3>напиши нам</h3>
          <input type="text" placeholder="имя" />
          <input type="text" placeholder="номер" />
          <button>send</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
