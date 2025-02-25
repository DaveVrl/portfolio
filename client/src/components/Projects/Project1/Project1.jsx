import style from "../IndividualProject.module.css";
import image from "../../../assets/LilianaGameStore.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Project1 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    
        setTimeout(() => {
            const projectsSection = document.getElementById("project_1");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
    
                // Espera un poco para ajustar la posición del scroll
                setTimeout(() => {
                    window.scrollBy(0, -70); // Mueve 70px hacia arriba
                }, 50); // Da tiempo a que termine el scroll inicial
            }
        }, 0);
    };

    return(
        <div className={style.containerProject}>
            <div className={style.containerTitle}>
                <h1>Liliana GameStore</h1>
                <span>2023</span>
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

export default Project1;