// -----------------------------------------
import style from "../IndividualProject.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";
import css3Img from "../../../assets/css3.svg";
import javascriptImg from "../../../assets/javascript.png";
import reactImg from "../../../assets/react.png";
import reduxImg from "../../../assets/redux.png";
import postgresqlImg from "../../../assets/postgresql.png";
import nodejsImg from "../../../assets/node-js.png";
import sequelizeImg from '../../../assets/sequelize-logo.png';
import expressImg from '../../../assets/express-logo.png';
import leftArrow from '../../../assets/left-arrow.png';


const Project2 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    
        setTimeout(() => {
            const projectsSection = document.getElementById("project_2");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
    
                // Espera un poco para ajustar la posición del scroll
                setTimeout(() => {
                    window.scrollBy(0, -60); // Mueve 20px hacia arriba
                }, 50); // Da tiempo a que termine el scroll inicial
            }
        }, 0);
    };
    

    return(
        <div className={style.containerProject}>
            <div className={style.containerTitle}>
                <h1>Pokémon SPA</h1>
                <span>2023</span>
            </div>
            <div className={style.containerSpan}>
                <p><span>STACK</span> PostgreSQL, Express, React, NodeJS </p>
                <p><span>PLATFORM</span> Web</p>
                <p><span>REPOSITORY</span> <a href="https://github.com/DaveVrl/SPA-Pokemon" target="Pokémon SPA"> {t("individual_projects.a_href_go_to_site")}</a></p>
            </div>
            <div className={style.carousel_container}>
                <Carousel/>
            </div>
            <p className={style.pText_1}>{t("project_2_full_description.paragraph1")}</p>
            <p className={style.pText_2}>{t("project_2_full_description.paragraph2")}</p>
            
            <h3>{t("individual_projects.tech")}</h3>

            <div className={style.container_infotechs}>
                <div className={style.container_front_techs}>
                    <div className={style.title_arrowLeft}>
                        <h4>Frontend</h4>
                        <img src={leftArrow} alt="left arrow icon" />
                    </div>
                    
                    <div className={style.container_logos}>
                        <img src={reactImg} alt="react logo" />
                        <img src={reduxImg} alt="redux logo" />
                        <img src={javascriptImg} alt="javascript logo" />
                        <img src={css3Img} alt="css logo" />
                    </div>
                    <p className={style.p_dependencies}><span>{t("individual_projects.dep")}</span> axios.
                    </p> 
                </div>
                               
                <div className={style.container_back_techs}>
                    <div className={style.title_arrowLeft}>
                        <h4>Backend</h4>
                        <img src={leftArrow} alt="left arrow icon" />
                    </div>
                    <div className={style.container_logos}>
                        
                        <img src={nodejsImg} alt="nodeJS logo" />
                        <img src={expressImg} alt="express logo" />
                        <img src={sequelizeImg} alt="sequelize logo" />
                        <img src={postgresqlImg} alt="postgreSQL logo" />
                    </div>
                    <p className={style.p_dependencies}><span>{t("individual_projects.dep")}</span> dotenv, axios, morgan, nodemon, pg.
                    </p>
                </div>     
            </div> {/*InfoTechs*/}

            {/*Bloque de videos...*/}

            <a className={style.aBack} onClick={handleBackClick}>{t("buttons.btn_back")}</a>
        </div>
    )
};

export default Project2;