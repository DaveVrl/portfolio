import style from './Contact.module.css';
import githubIcon from "../../assets/white-git-icon.svg";
import linkedinIcon from "../../assets/white-linkedin-icon.svg";
import arrow from "../../assets/white-arrow-right.png";

const Contact = () => {
    
    return (
        <div className={style.containerContact}>
            <h1>Contact Me</h1>
            <div className={style.containerButtons}>
        <a href="https://www.linkedin.com/in/davevrl/" target="linkedinProfile">
          <div className={style.containerImgSpan}>
            <img
              className={style.contactIcon}
              src={linkedinIcon}
              alt="LogoLinkedin"
            />
            <span>Linkedin</span>
          </div>

          <img className={style.arrow} src={arrow} alt="arrow" />
        </a>
        <a href="https://github.com/DaveVrl" target="gitProfile">
          <div className={style.containerImgSpan}>
            <img
              className={style.contactIcon}
              src={githubIcon}
              alt="LogoGithub"
            />
            <span>GitHub</span>
          </div>
          <img className={style.arrow} src={arrow} alt="arrow" />
        </a>
      </div>
            <form className={style.contact_form_container}>
                <input type="text" placeholder="Nombre"/>
                <input type="email" placeholder="Email"/>
                <textarea name="" id="" placeholder="Mensaje"/>
                <button type="submit">Enviar</button>
            </form>
            
        </div>
    )
};

export default Contact;