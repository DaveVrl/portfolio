import style from "./NavBar.module.css";
import image from "../../assets/computer-logo-icon.svg";
import { Link } from "react-scroll";
import { useState } from "react";
import Lenguage from '../ThemeAndLenguage/Lenguage/Lenguage'
import { useLocation , useNavigate } from "react-router-dom";
import leftArrow from '../../assets/left-arrow-nav.png';

const NavBar = () => {

  const [activeButton, setActiveButton] = useState(null);
  
  const handleSetActive = (to) => {
      setActiveButton(to);
  };

  const location = useLocation();

  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate("/");

    const checkElement = setInterval(() => {
        let projectsSection = null;

        if (location.pathname.includes('/taskunity')) projectsSection = document.getElementById('projects');
        if (location.pathname.includes('/liliana')) projectsSection = document.getElementById('project_1');
        if (location.pathname.includes('/pokemon')) projectsSection = document.getElementById('project_2');

        let scrollNumber = location.pathname.includes('/taskunity') ? -20 : -70;

        if (projectsSection) {
            clearInterval(checkElement); // Detenemos el intervalo cuando encontramos el elemento
            projectsSection.scrollIntoView({ behavior: "smooth" });

            // Esperar a que termine el desplazamiento antes de corregir la posición
            setTimeout(() => {
                const finalPosition = projectsSection.getBoundingClientRect().top + window.scrollY + scrollNumber;
                window.scrollTo({ top: finalPosition, behavior: "instant" }); // Sin animación para asegurar la precisión
            }, 25); // Esperamos lo suficiente para que termine la animación
        }
    }, 50);
};

  return (
    <div className={style.navContainer}>
      <img className={style.logo} src={image} alt="Logo" />
      <div className={style.btns_and_lenguage_container}>
        <div className={style.containerBtns}>
          {
            location.pathname.includes('/projects') 
            ? (
              <img className={style.arrowMenu} src={leftArrow} alt="left arrow icon" onClick={handleBackClick} />
            )
            : (
            <div className={style.btns_hidden}> {/*Con la animación evito el bug visual de activeBtn*/}
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
            offset={-70}
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
            offset={-70}
            duration={500}
            className={`${style.navBtn} ${activeButton === "about" ? style.activeBtn : ""}`}
            onSetActive={() => handleSetActive("about")}
          >
            About
          </Link>
          </div>
            )
          }
          
        </div>
        <Lenguage/>
        </div>
    </div>
  );
};

export default NavBar;