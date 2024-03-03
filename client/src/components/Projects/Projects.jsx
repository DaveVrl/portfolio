import style from "./Projects.module.css";
import lilianaImg from "../../assets/LilianaGameStore.png";
import pokmemonImg from "../../assets/PokemonSPA.svg";
// import image from "../../assets/example.jpg"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={style.containerProjects}>
            <h1 className={style.h1_title}>My Projects</h1>
            <div className={style.div_a}>
                <div className={style.div_a_project}>
            <div className={style.cardProject}>
                <div className={style.containerImg}>
                <img src={lilianaImg} alt="foto"/>
                </div>
                <h2>Liliana GameStore</h2>
                <p>{t("project_card.description_project_1")}</p>
            </div>
            <a className={style.viewMore} onClick={()=>{navigate('/projects/project1')}}>{t("buttons.btn_view_more")}</a>
                </div>
            <hr />
                <div className={style.div_a_project}>
            <div className={style.cardProject}>
                <div className={style.containerImg}>
                <img src={pokmemonImg} alt="foto"/>
                </div>
                <h2>Pokémon SPA</h2>
                <p>{t("project_card.description_project_2")}</p>
            </div>
            <a className={style.viewMore} onClick={()=>{navigate('/projects/project2')}}>{t("buttons.btn_view_more")}</a>
                </div>
            <hr />
            </div>
        </div>
    )
};

export default Projects;