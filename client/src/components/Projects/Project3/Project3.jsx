import style from "../IndividualProject.module.css";
import image from "../../../assets/LilianaGameStore.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Project3 = () => {
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
                <h1>TaskUnity</h1>
                <span>2024</span>
            </div>
            <div className={style.containerSpan}>
                <p><span>STACK</span> JavaScript, NodeJS, React, PostgreSQL</p>
                <p><span>PLATFORM</span> Web</p>
                <p><span>REPOSITORY</span> <a href="https://github.com/gabivillarec/Liliana-GameStore" target="LilianaGamestore">LilianaGamestore</a></p>
            </div>
            <div className={style.containerImg}>
                <img className={style.imgProject} src={image} alt="projectImage"/>
            </div>
            <p className={style.pText}>{t("project_1_full_description.paragraph1")}</p>
            <p className={style.pText}>{t("project_1_full_description.paragraph2")}</p>
            <p className={style.pText}>{t("project_1_full_description.paragraph3")}</p>
            <a className={style.aBack} onClick={handleBackClick}>{t("buttons.btn_back")}</a>
        </div>
    )
};

export default Project3;