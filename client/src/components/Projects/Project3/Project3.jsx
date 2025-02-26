import style from "../IndividualProject.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";

const Project3 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    
        setTimeout(() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
    
                // Espera un poco para ajustar la posición del scroll
                setTimeout(() => {
                    window.scrollBy(0, -20); // Mueve 20px hacia arriba
                }, 50); // Da tiempo a que termine el scroll inicial
            }
        }, 0);
    };
    

    return(
        <div className={style.containerProject}>
            <div className={style.containerTitle}>
                <h1>TaskUnity</h1>
                <span>2024</span>
            </div>
            <div className={style.containerSpan}>
                <p><span>STACK</span> PostgreSQL, Express, React, NodeJS </p>
                <p><span>PLATFORM</span> Web</p>
                <p><span>WEBSITE</span> <a href="_" target="LilianaGamestore"> Ir al sitio</a></p>
            </div>
            <div className={style.carousel_container}>
                <Carousel/>
            </div>
            <p className={style.pText}>{t("project_3_full_description.paragraph1")}</p>
            <p className={style.pText}>{t("project_3_full_description.paragraph2")}</p>

            <div className={style.container_infotechs}>

                <h3>Tecnologías utilizadas</h3>
                
                <div className={style.container_front_techs}>
                    <h4>Frontend:</h4>
                    <div className={style.container_logos}>
                        {/*Logos*/}
                    </div>
                    <div className={style.dependencies} >
                        <h5>Dependencias:</h5>
                        <p>dependencias utiliziadas....</p>
                    </div>
                </div>
                
                <div className={style.container_back_techs}>
                    <h4>Backend:</h4>
                    <div className={style.container_logos}>
                        {/*Logos*/}
                    </div>
                    <div className={style.dependencies} >
                        <h5>Dependencias:</h5>
                        <p>dependencias utiliziadas....</p>
                    </div>
                </div>
            </div>

            {/*Bloque de videos...*/}

            <a className={style.aBack} onClick={handleBackClick}>{t("buttons.btn_back")}</a>
        </div>
    )
};

export default Project3;