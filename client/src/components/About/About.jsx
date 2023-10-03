import style from "./About.module.css";
import githubIcon from "../../assets/white-git-icon.svg"
import linkedinIcon from "../../assets/white-linkedin-icon.svg"
import emailIcon from "../../assets/white-email-icon.png"
import arrow from "../../assets/white-arrow-right.png"

const About = () => {

    return (
        <div className={style.containerAbout}>
            <h1>About Me</h1>
            <p>¡Hola! soy David Varela, tengo 29 años y vivo en San Juan, Argentina.</p>
            <p>Me adentré en la programación por cuenta propia, aprendí HTML, CSS y JavaScript básico de forma autodidácta haciendo cursos gratuitos y realizando diversas prácticas.
            A principios del 2023 decidí dar un salto profesional ingresando a la academia Henry donde me gradué como Full Stack Web Developer.</p>
            <p>Disfruto mucho de la programación, la música, el entrenamiento físico y el desarrollo personal.</p>
            <hr/>
            <p>Actualmente estoy en búsqueda de trabajo, me encantaría poder realizarlo de forma remota. Tengo gran interés en aportar mis conocimientos y potenciarlos junto a mis habilidades siendo parte de un equipo de trabajo.</p>
            <div className={style.containerButtons}>
                <a href="https://www.linkedin.com/in/davevrl/" target="linkedinProfile">
                    <img className={style.contactIcon} src={linkedinIcon} alt="LogoLinkedin" />
                    <span>Linkedin</span>
                    <img className={style.arrow} src={arrow} alt="arrow" />
                    </a>
                <a href="https://github.com/DaveVrl" target="gitProfile">
                    <img className={style.contactIcon} src={githubIcon} alt="LogoGithub" />
                    <span>GitHub</span>
                    <img className={style.arrow} src={arrow} alt="arrow" />
                </a>
                <a href="mailto:doble.aguila@hotmail.com" target="sendEmail">
                    <img className={style.contactIcon} src={emailIcon} alt="LogoEmail" />
                    <span>Send email</span>
                    <img className={style.arrow} src={arrow} alt="arrow" />
                </a>
            </div>
        </div>
    )
};

export default About;