import image from "../../assets/personal-photo.png";
import style from "./Home.module.css";

import css3Image from "../../assets/css3.svg";
import htmlImage from "../../assets/html.svg";
import javascriptImage from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import reduxImage from "../../assets/redux.png";
import postgresqlImage from "../../assets/postgresql.png";
import nodejsImage from "../../assets/node-js.png";
import gitImage from "../../assets/git.svg";
import { useTranslation } from 'react-i18next';

const Home = () => {
  
  const { t } = useTranslation();

  const imageRoute = [
    postgresqlImage,
    nodejsImage,
    javascriptImage,
    reactImage,
    reduxImage,
    gitImage,
    htmlImage,
    css3Image,
  ];

  return (
    <div className={style.homeContainer}>
      <h1>David Varela</h1>
      <p>
        {t("home.paragraph1")}
      </p>
      <div className={style.profile_image_container}>
        <img
        className={style.image}
        src={image}
        alt="Fotografía"
      />
      </div>
      <p>
        {t("home.paragraph2")}
      </p>
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
  );
};

export default Home;
