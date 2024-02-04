import style from "./About.module.css";
import githubIcon from "../../assets/white-git-icon.svg";
import linkedinIcon from "../../assets/white-linkedin-icon.svg";
import emailIcon from "../../assets/white-email-icon.png";
import arrow from "../../assets/white-arrow-right.png";
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

  return (
    <div className={style.containerAbout}>
      <h1>About Me</h1>
      <p>
        {t("about.paragraph1")}
      </p>
      <p>
        {t("about.paragraph2")}
      </p>
      <p>
        {t("about.paragraph3")}
      </p>
      <hr />
      <p>
        {t("about.paragraph4")}
      </p>
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
        <a href="mailto:doble.aguila@hotmail.com" target="sendEmail">
          <div className={style.containerImgSpan}>
            <img
              className={style.contactIcon}
              src={emailIcon}
              alt="LogoEmail"
            />
            <span>Send email</span>
          </div>
          <img className={style.arrow} src={arrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default About;
