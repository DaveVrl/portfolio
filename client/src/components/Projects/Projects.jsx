import style from "./Projects.module.css";
import lilianaImg from "../../assets/LilianaGameStore.png";
import pokmemonImg from "../../assets/PokemonSPA.svg";
// import image from "../../assets/example.jpg"

const Projects = () => {

    return (
        <div className={style.containerProjects}>
            <h1 className={style.h1_title}>My Projects</h1>
            <div className={style.div_a}>
                <div className={style.div_a_project}>
            <div className={style.cardProject} href="/projects/project1">
                <div className={style.containerImg}>
                <img src={lilianaImg} alt="foto"/>
                </div>
                <h2>Liliana GameStore</h2>
                <p>Proyecto final de Henry desarrollado en equipo aplicando metodologia SCRUM. Es una tienda virtual enfocada a la venta de productos gamer.</p>
            </div>
            <a className={style.viewMore} href="/projects/project1">Ver más</a>
                </div>
            <hr />
                <div className={style.div_a_project}>
            <div className={style.cardProject} href="/projects/project2">
                <div className={style.containerImg}>
                <img src={pokmemonImg} alt="foto"/>
                </div>
                <h2>Pokémon SPA</h2>
                <p>Proyecto individual de Henry. Es una single page application con la temática de Pokémon, desarrollada para demostrar conocimientos adquiridos.</p>
            </div>
            <a className={style.viewMore} href="/projects/project2">Ver más</a>
                </div>
            <hr />
            </div>
        </div>
    )
};

export default Projects;