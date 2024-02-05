import { useTranslation } from "react-i18next";
import style from "./Lenguage.module.css";
import argFlag from "../../../assets/argentina-flag.png";
import usFlag from "../../../assets/estados-unidos-flag.png";


const Lenguage = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // Guardar en localStorage
      };

      const isSpanish = i18n.language === 'es';

      return (
        <div className={style.container}>
          {isSpanish ? (
            <>
              <span>ES</span>
              <img src={argFlag} className={style.btnLenguage} onClick={() => changeLanguage('en')} />
              <img src={usFlag} className={style.btnLenguage} style={{ display: 'none' }} onClick={() => changeLanguage('en')} />
            </>
          ) : (
            <>
              <span>EN</span>
              <img src={argFlag} className={style.btnLenguage} style={{ display: 'none' }} onClick={() => changeLanguage('es')} />
              <img src={usFlag} className={style.btnLenguage} onClick={() => changeLanguage('es')} />
            </>
          )}
        </div>
      );
    };
    
    export default Lenguage;