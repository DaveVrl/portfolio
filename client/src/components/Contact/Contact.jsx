import { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import githubIcon from "../../assets/white-git-icon.svg";
import linkedinIcon from "../../assets/white-linkedin-icon.svg";
import arrow from "../../assets/white-arrow-right.png";
import emailIcon from "../../assets/white-email-icon.png";
import downArrow from "../../assets/mailbox.png";
import { useTranslation } from "react-i18next";
import { useEffect , useState } from "react";
import { Tooltip } from 'react-tooltip'


const Contact = () => {
  
  const { t } = useTranslation();
  const formRef = useRef(null);

  const [ isSubmitLoading , setSubmitLoading ] = useState(false);

    useEffect(() => {
        if (isSubmitLoading) {
            // Agregar la clase 'cursor-wait' al body
            document.body.classList.add('cursor-wait');
        } else {
            // Eliminar la clase 'cursor-wait' del body
            document.body.classList.remove('cursor-wait');
        }
    
        // Limpieza para asegurarnos de que no quede activa la clase
        return () => document.body.classList.remove('cursor-wait');
    }, [isSubmitLoading]);

    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [errorTooltipVisible, setErrorTooltipVisible] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setSubmitLoading(true);
    
      emailjs
        .sendForm(
          "service_nd6x6ug", // Service ID
          "template_1rnewts", // Template ID
          formRef.current,
          "Wxeh_SsVpLwknUXu2" // Public Key
        )
        .then(() => {
          formRef.current.reset();
          setTooltipVisible(true);
          setTimeout(() => {
            setTooltipVisible(false);
          }, 4000);
        })
        .catch((error) => {
          console.error("Error al enviar el mensaje", error);
          setErrorTooltipVisible(true);
          setTimeout(() => {
            setErrorTooltipVisible(false);
          }, 4000);
        })
        .finally(() => setSubmitLoading(false));
    };

  return (
    <div className={style.containerContact}>
      <h1>Contact Me</h1>
      <div className={style.containerButtons}>
        <a href="https://www.linkedin.com/in/davevrl/" target="_blank" rel="noreferrer">
          <div className={style.containerImgSpan}>
            <img className={style.contactIcon} src={linkedinIcon} alt="LogoLinkedin" />
            <span>Linkedin</span>
          </div>
          <img className={style.arrow} src={arrow} alt="arrow" />
        </a>
        <a href="https://github.com/DaveVrl" target="_blank" rel="noreferrer">
          <div className={style.containerImgSpan}>
            <img className={style.contactIcon} src={githubIcon} alt="LogoGithub" />
            <span>GitHub</span>
          </div>
          <img className={style.arrow} src={arrow} alt="arrow" />
        </a>
      </div>
      <form ref={formRef} className={style.contact_form_container} onSubmit={sendEmail}>
        <div className={style.border_form}>
          <div className={style.h3_arrowDown}>
            <h3>{t("contact.title")}</h3>
            <img 
            src={downArrow} 
            alt="Down arrow icon"
            data-tooltip-id="tooltip-form"
              />
              {<Tooltip className={style.tooltip} id="tooltip-form" isOpen={tooltipVisible} place="bottom-end" variant="success" content="¡Tu mensaje ha sido enviado exitosamente!"/>}
              {<Tooltip id="tooltip-form" isOpen={errorTooltipVisible} place="bottom-end" variant="error" content="¡Ups! No se pudo enviar tu mensaje."/>}
          </div>
          <input type="text" name="user_name" placeholder={t("contact.input1")} required />
          <input type="email" name="user_email" placeholder={t("contact.input2")} required />
          <textarea name="message" placeholder={t("contact.textarea")} required />
        </div>
        <button type="submit">
          <div className={style.containerImgSpan}>
            <img className={style.contactIcon} src={emailIcon} alt="LogoEmail" />
            <span>{t("contact.btn_send")}</span>
          </div>
          <img className={style.arrow} src={arrow} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default Contact;