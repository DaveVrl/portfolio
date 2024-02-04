import style from "../IndividualProject.module.css";
import image from "../../../assets/LilianaGameStore.png";
import { useTranslation } from "react-i18next";

const Project1 = () => {

    const { t } = useTranslation();

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
            <a className={style.aBack} href="/projects">{t("buttons.btn_back")}</a>
        </div>
    )
};

export default Project1;