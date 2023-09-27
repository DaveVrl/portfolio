import image from "../../assets/personal-photo.png";
import style from "./Home.module.css";

import css3Image from '../../assets/css3.svg';
import htmlImage from '../../assets/html.svg';
import javascriptImage from '../../assets/javascript.png';
import reactImage from '../../assets/react.png';
import reduxImage from '../../assets/redux.png';
import postgresqlImage from '../../assets/postgresql.png';
import nodejsImage from '../../assets/node-js.png';
import gitImage from '../../assets/git.svg';

const Home = () => {

    const imageRoute = [postgresqlImage,nodejsImage,javascriptImage,reactImage,reduxImage,gitImage,htmlImage,css3Image];

    return(
        <div className={style.homeContainer}>
            <h1>David Varela</h1>
            <p>¡Hola! Soy un Full Stack Web Developer con enfoque en la creación de soluciones modernas y atractivas. Mi objetivo es utilizar mis habilidades y experiencia en el desarrollo web para brindar soluciones impactantes y de calidad.</p>
            <img className={style.image} src={image} alt="Fotografía" />
            <p>Estoy listo para afrontar desafíos y colaborar en proyectos. Tengo mucho interés en seguir sumando conocimiento. Si buscas un desarrollador web apasionado y comprometido, ¡no dudes en contactarme!</p>
            <div className={style.containerLogos}>
                {imageRoute.map((route, index) => (
                    <img
                        key={index}
                        src={route}
                        alt={`Logo ${index}`}
                        className={style[`icon${index}`]}
                    />
                ))}
            </div>
        </div>
    )
};

export default Home;