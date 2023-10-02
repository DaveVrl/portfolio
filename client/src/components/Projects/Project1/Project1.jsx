import style from "../IndividualProject.module.css";
import image from "../../../assets/LilianaGameStore.png";

const Project1 = () => {

    return(
        <div className={style.containerProject}>
            <div className={style.containerTitle}>
            <h1>Liliana GameStore</h1>
            <span>2023</span>
            </div>
            <div className={style.containerSpan}>
            <p><span>STACK</span> JavaScript, NodeJS, React, PostgreSQL.</p>
            <p><span>PLATFORM</span> Windows.</p>
            <p><span>WEBSITE</span> <a href="https://lilianagamesstore.onrender.com/" target="LilianaGamestore">LilianaGamestore</a></p>
            </div>
            <img className={style.imgProject} src={image} alt="projectImage" height="280px"/>
            <p className={style.pText}>Liliana Gamestore es un e-commerce de tipo B2C (Business to Consumer) desarrollado en equipo bajo metodología SCRUM. Este sitio incluye base de datos, servidor, controllers, rutas, paginados, filtros combinados, ordenamiento, formularios controlados, registro y login de usuarios, crud de admin, pasarela de pagos, favoritos, carrito de compra, reviews de productos, notificaciones, borrado lógico, local storage, Redux y estados.</p>
            <p className={style.pText}> Fue un proyecto grupal asignado por Henry para evaluar competencias técnicas. Mi mayor enfoque fue en el desarrollo de controladores backend y base de datos.</p>
            <p className={style.pText}>Tecnologías utilizadas: Frontend (HTML, CSS3, Bootstrap, JavaScript con React y Redux), Backend (Node.js con Express.js y JavaScript), Base de Datos (PostgreSQL con Sequelize), Payment API (MercadoPago).</p>
            <a className={style.aBack} href="/projects">Volver</a>
        </div>
    )
};

export default Project1;