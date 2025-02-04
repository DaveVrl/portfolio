import style from "./NavBar.module.css";
import image from "../../assets/computer-logo-icon.svg";
import { Link } from "react-scroll";
import { useState } from "react";
import Lenguage from '../ThemeAndLenguage/Lenguage/Lenguage'

const NavBar = () => {
  const [activeButton, setActiveButton] = useState("home");
  console.log(activeButton)
  const handleSetActive = (to) => {
    setActiveButton(to);
  };

  return (
    <div className={style.navContainer}>
      <img className={style.logo} src={image} alt="Logo" />
      <div className={style.btns_and_lenguage_container}>
        <div className={style.containerBtns}> {/*AÑADIR DISPLAY FLEX o probar...*/}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`${style.navBtn} ${activeButton === "home" ? style.activeBtn : ""}`}
            onSetActive={() => handleSetActive("home")}
          >
            Home
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className={`${style.navBtn} ${activeButton === "projects" ? style.activeBtn : ""}`}
            onSetActive={() => handleSetActive("projects")}
          >
            Projects
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className={`${style.navBtn} ${activeButton === "about" ? style.activeBtn : ""}`}
            onSetActive={() => handleSetActive("about")}
          >
            About
          </Link>
        </div>
        <Lenguage/>
        </div>
    </div>
  );
};

export default NavBar;