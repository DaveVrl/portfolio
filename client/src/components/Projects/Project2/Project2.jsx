import style from "../IndividualProject.module.css";
import image from "../../../assets/PokemonSPA.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const Project2 = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
        // Espera a que la navegación ocurra y luego mueve el scroll
        setTimeout(() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 0); // Asegúrate de que el scroll se aplique después de la navegación
    };

    return(
        <div className={style.containerProject}>
            <div className={style.containerTitle}>
            <h1>Pokémon SPA</h1>
            <span>2023</span>
            </div>
            <div className={style.containerSpan}>
            <p><span>STACK</span> JavaScript, NodeJS, React, PostgreSQL</p>
            <p><span>PLATFORM</span> Web</p>
            <p><span>REPOSITORY</span> <a href="https://github.com/DaveVrl/SPA-Pokemon" target="PokemonSPA">Pokémon SPA</a></p>
            </div>
            <div className={style.containerImg}>
            <img className={style.imgProject} src={image}alt="projectImage"/>
            </div>
            <p className={style.pText}>{t("project_2_full_description.paragraph1")}</p>
            <p className={style.pText}>{t("project_2_full_description.paragraph2")}</p>
            <p className={style.pText}>{t("project_2_full_description.paragraph3")}</p>
            <a className={style.aBack} onClick={handleBackClick}>{t("buttons.btn_back")}</a>
        </div>
    )
};

export default Project2;