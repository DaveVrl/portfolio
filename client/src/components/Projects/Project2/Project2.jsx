import style from "../IndividualProject.module.css";
import image from "../../../assets/PokemonSPA.svg";

const Project2 = () => {

    return(
        <div className={style.containerProject}>
            <div className={style.containerTitle}>
            <h1>Pokémon SPA</h1>
            <span>2023</span>
            </div>
            <div className={style.containerSpan}>
            <p><span>STACK</span> JavaScript, NodeJS, React, PostgreSQL.</p>
            <p><span>PLATFORM</span> Windows.</p>
            <p><span>WEBSITE</span> <a href="https://spa-pokemon.onrender.com/" target="PokemonSPA">Pokémon SPA</a></p>
            </div>
            <img className={style.imgProject} src={image} alt="projectImage"/>
            <p className={style.pText}>Pokémon SPA es una single page application desarrollada de forma individual. Este sitio incluye consumo de API, búsquedas, filtros, ordenamiento, formularios controlados, Redux y estados, paginado, rutas, controllers y base de datos.</p>
            <p className={style.pText}>Fue un proyecto individual asignado por Henry para evaluar competencias técnicas. En esta aplicación podrás buscar tus pokémons favoritos, visualizar sus estadísticas y crearte uno a tu gusto.</p>
            <p className={style.pText}>Tecnologías utilizadas: Frontend (HTML, CSS3, JavaScript con React y Redux), Backend (Node.js con Express.js y JavaScript), Base de Datos (PostgreSQL con Sequelize).</p>
            <a className={style.aBack} href="/projects">Volver</a>
        </div>
    )
};

export default Project2;