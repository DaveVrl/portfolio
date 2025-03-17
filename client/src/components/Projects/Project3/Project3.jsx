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
import socketioImg from '../../../assets/socketio-logo.png';
import expressImg from '../../../assets/express-logo.png';
import reactBootstrapImg from '../../../assets/reactb-logo.png';
import leftArrow from '../../../assets/left-arrow.png';


const Project3 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    
        const checkElement = setInterval(() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                clearInterval(checkElement);
    
                projectsSection.scrollIntoView({ behavior: "smooth" });
    
                // Esperar a que termine el desplazamiento antes de corregir la posición
                setTimeout(() => {
                    const offset = 60; // Ajuste deseado
                    const finalPosition = projectsSection.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: finalPosition, behavior: "instant" }); // Sin animación para que el ajuste sea exacto
                }, 25); // Espera más tiempo para que termine la animación de scroll
            }
        }, 50);
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
                <p><span>WEBSITE</span> <a href={null} target="LilianaGamestore"> {t("individual_projects.a_href_go_to_site")}</a></p>
            </div>
            <div className={style.carousel_container}>
                <Carousel/>
            </div>
            <p className={style.pText_1}>{t("project_3_full_description.paragraph1")}</p>
            <p className={style.pText_2}>{t("project_3_full_description.paragraph2")}</p>
            <p className={style.pText_3}>{t("project_3_full_description.paragraph3")}</p>
            
            <h3>{t("individual_projects.tech")}</h3>

            <div className={style.container_infotechs}>    
                <div className={style.container_front_techs}>
                    <div className={style.title_arrowLeft}>
                        <h4>Frontend</h4>
                        <img src={leftArrow} alt="left arrow icon" />
                    </div>
                    
                    <div className={style.container_logos}>
                        <img src={reactImg} alt="react logo" title="React" />
                        <img src={reduxImg} alt="redux logo" title="Redux" />
                        <img src={javascriptImg} alt="javascript logo" title="Javascript" />
                        <img src={reactBootstrapImg} alt="react bootstrap logo" title="React Bootstrap" />
                        <img src={css3Img} alt="css logo" title="CSS" />
                    </div>
                    <p className={style.p_dependencies}><span>{t("individual_projects.dep")}</span> axios, dayjs, ldrs, react-loading-skeleton, react-tooltip, react-beautiful-dnd.
                    </p> 
                </div>
                               
                <div className={style.container_back_techs}>
                    <div className={style.title_arrowLeft}>
                        <h4>Backend</h4>
                        <img src={leftArrow} alt="left arrow icon" />
                    </div>
                    <div className={style.container_logos}>
                        <img src={socketioImg} alt="socket.io logo" title="Socket.io" />
                        <img src={nodejsImg} alt="nodeJS logo" title="NodeJS" />
                        <img src={expressImg} alt="express logo" title="Express" />
                        <img src={sequelizeImg} alt="sequelize logo" title="Sequelize" />
                        <img src={postgresqlImg} alt="postgreSQL logo" title="PostgreSQL" />
                    </div>
                    <p className={style.p_dependencies}><span>{t("individual_projects.dep")}</span> bcrypt, dotenv, jsonwebtoken, nodemailer, axios, morgan, nodemon, pg, socket.io.
                    </p>
                </div>     
            </div> {/*InfoTechs*/}

            {/*Bloque de videos...*/}

            <a className={style.aBack} onClick={handleBackClick}>{t("buttons.btn_back")}</a>
        </div>
    )
};

export default Project3;