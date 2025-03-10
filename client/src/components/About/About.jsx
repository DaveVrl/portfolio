import style from "./About.module.css";
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
      
    </div>
  );
};

export default About;
