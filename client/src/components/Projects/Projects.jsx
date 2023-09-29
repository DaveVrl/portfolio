import style from "./Projects.module.css";
import lilianaImg from "../../assets/LilianaGameStore.png";
import pokmemonImg from "../../assets/PokemonSPA.svg";
// import image from "../../assets/example.jpg"

const Projects = () => {

    return (
        <div className={style.containerProjects}>
            <h1 className={style.h1_title}>My Projects</h1>
            <a className={style.a} href="/projects/project1">
                <img src={lilianaImg} alt="foto" height="260px"/>
                <h2>Liliana GameStore</h2>
                <p>Proyecto final de Henry desarrollado en equipo aplicando metodologia SCRUM. Es una tienda virtual enfocada a la venta de productos gamer.</p>
            </a>
            <a className={style.viewMore} href="/projects/project1">Ver más...</a>
            <hr />
            <a className={style.a} href="/projects/project2">
                <img src={pokmemonImg} alt="foto"/>
                <h2>Pokémon SPA</h2>
                <p>Proyecto individual de Henry. Es una single page application con la temática de Pokémon, desarrollada para demostrar conocimientos adquiridos.</p>
            </a>
            <a className={style.viewMore} href="/projects/project2">Ver más...</a>
            {/* <a className={style.a} href="/projects/project3">
                <img src={image} alt="foto"/>
                <h2>Project3</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deleniti architecto, veniam natus dolore vitae eligendi assumenda inventore corrupti maiores nostrum voluptates sunt consectetur obcaecati minima quam et molestiae accusantium.</p>
            </a> */}
        </div>
    )
};

export default Projects;