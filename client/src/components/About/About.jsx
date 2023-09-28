import style from "./About.module.css";
import githubIcon from "../../assets/white-git-icon.svg"
import linkedinIcon from "../../assets/white-linkedin-icon.svg"
import emailIcon from "../../assets/white-email-icon.png"
import arrow from "../../assets/white-arrow-right.png"

const About = () => {

    return (
        <div className={style.containerAbout}>
            <h1>About me</h1>
            <p>¡Hola! soy David Varela, tengo 29 años y vivo en San Juan, Argentina.</p>
            <p>Me adentré en la programación a principios del 2022, aprendí HTML, CSS y JavaScript básico de forma autodidácta haciendo cursos gratuitos y realizando diversas prácticas.
            A principios del 2023 decidí dar un salto profesional ingresando a la academia Henry donde me gradué como Full Stack Web Developer.</p>
            <p>Disfruto mucho de la programación, la música, el entrenamiento físico y el desarrollo personal.</p>
            <hr/>
            <p>Actualmente estoy en búsqueda de trabajo como Desarrollador Web Full Stack, me encantaría poder trabajar de forma remota para el exterior. Tengo gran interés en aportar mis conocimientos y potenciarlos junto a mis habilidades siendo parte de un equipo de trabajo.</p>
            <div className={style.containerButtons}>
                <a href="">
                    <img className={style.contactIcon} src={linkedinIcon} alt="LogoLinkedin" />
                    <span>Linkedin</span>
                    <img className={style.arrow} src={arrow} alt="arrow" />
                    </a>
                <a href="">
                    <img className={style.contactIcon} src={githubIcon} alt="LogoGithub" />
                    <span>GitHub</span>
                    <img className={style.arrow} src={arrow} alt="arrow" />
                </a>
                <a href="">
                    <img className={style.contactIcon} src={emailIcon} alt="LogoEmail" />
                    <span>Email</span>
                    <img className={style.arrow} src={arrow} alt="arrow" />
                </a>
            </div>
        </div>
    )
};

export default About;