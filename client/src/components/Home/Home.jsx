import image from "../../assets/personal-photo.png";
import style from "./Home.module.css";

const Home = () => {

    return(
        <div className={style.homeContainer}>
            <h1>David Varela</h1>
            <p>¡Hola! Soy un apasionado desarrollador web Full Stack con un enfoque en la creación de soluciones modernas y atractivas. Mi objetivo es utilizar mis habilidades y experiencia en el desarrollo web para brindar soluciones impactantes y de calidad.</p>
            <img className={style.image} src={image} alt="Fotografía" />
            <p>Estoy listo para afrontar desafíos y colaborar en proyectos emocionantes. Tengo mucho interés en seguir sumando conocimiento. Si buscas un desarrollador web apasionado y comprometido, ¡no dudes en contactarme!</p>
        </div>
    )
};

export default Home;