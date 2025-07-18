import style from "./Projects.module.css";
import lilianaImg from "../../assets/LilianaGamestore/cap2.jpg";
import pokmemonImg from "../../assets/pokemonspa/cap3.jpg";
import taksunity from '../../assets/taskunity/cap1.jpg';
// import image from "../../assets/example.jpg"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigation = (pathname) => {
        navigate(pathname);
        window.scrollTo(0, 0);
    };

    return (
        <div className={style.containerProjects}>
            <h1 className={style.h1_title}>My Projects</h1>
            <div className={style.div_a}>

{/*/////////////////////////////////////////////////////////////////////////////////*/}

            <div className={style.div_a_project}>
            <div className={style.cardProject}>
                <div className={style.containerImg}>
                <img src={taksunity} alt="foto" />
                </div>
                <div className={style.card_h2_and_p_container}>
                <h2>TaskUnity</h2>
                <p>{t("project_card.description_project_3")}</p>
            <a className={style.viewMore} onClick={()=>{handleNavigation('/projects/taskunity')}}>{t("buttons.btn_view_more")}</a>
                </div>
            </div>
                </div>
                <hr />

{/*/////////////////////////////////////////////////////////////////////////////////*/}

                <div className={style.div_a_project} id="project_1">
            <div className={style.cardProject}>
                <div className={style.containerImg}>
                <img src={lilianaImg} alt="foto"/>
                </div>
                <div className={style.card_h2_and_p_container}>
                <h2>Liliana GameStore</h2>
                <p>{t("project_card.description_project_1")}</p>
            <a className={style.viewMore} onClick={()=>{handleNavigation('/projects/liliana-game-store')}}>{t("buttons.btn_view_more")}</a>
                </div>
            </div>
                </div>
                <hr />

{/*/////////////////////////////////////////////////////////////////////////////////*/}

                <div className={style.div_a_project} id="project_2">
            <div className={style.cardProject}>
                <div className={style.containerImg}>
                <img src={pokmemonImg} alt="foto"/>
                </div>
                <div className={style.card_h2_and_p_container}>
                <h2>Pokémon SPA</h2>
                <p>{t("project_card.description_project_2")}</p>
            <a className={style.viewMore} onClick={()=>{handleNavigation('/projects/pokemon-spa')}}>{t("buttons.btn_view_more")}</a>
                </div>
            </div>
                </div>
            
            </div>
        </div>
    )
};

export default Projects;