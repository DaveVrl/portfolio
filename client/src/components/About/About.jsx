import style from "./About.module.css";
import githubIcon from "../../assets/white-git-icon.svg"
import linkedinIcon from "../../assets/white-linkedin-icon.svg"
import emailIcon from "../../assets/white-email-icon.png"
import arrow from "../../assets/white-arrow-right.png"

const About = () => {

    return (
        <div className={style.containerAbout}>
            <h1>About me</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi laborum quasi praesentium nesciunt iste dicta totam, sapiente, fugit omnis distinctio impedit assumenda delectus cumque dolorum, commodi nemo. Consectetur, illo ducimus.</p>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste autem corrupti, consequatur, omnis ex, quam asperiores ab temporibus eum ducimus nisi. Repudiandae voluptatem, amet iste magnam rerum possimus expedita.</p>
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