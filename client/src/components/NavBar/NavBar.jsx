import style from "./NavBar.module.css";
import image from "../../assets/computer-logo-icon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    // Obtenemos el nombre de la ruta activa sin el /
    const activeRoute = location.pathname.slice(1);
    setActiveButton(activeRoute);
  }, [location]);

  return (
    <div className={style.navContainer}>
      <img className={style.logo} src={image} alt="Logo" />
      <div className={style.containerBtns}>
        <button
          className={`${style.navBtn} ${
            activeButton === "" ? style.activeBtn : ""
          }`}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          className={`${style.navBtn} ${
            location.pathname.startsWith("/projects") ? style.activeBtn : ""
          }`}
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </button>
        <button
          className={`${style.navBtn} ${
            activeButton === "about" ? style.activeBtn : ""
          }`}
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </button>
      </div>
    </div>
  );
};

export default NavBar;
