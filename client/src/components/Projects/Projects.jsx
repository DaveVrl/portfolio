import image from "../../assets/example.jpg";
import style from "./Projects.module.css";

const Projects = () => {

    return (
        <div>
            <h1>My Projects</h1>
            <a className={style.a} href="/projects/project1">
                <img src={image} alt="foto" height="260px"/>
                <h1>Project1</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deleniti architecto, veniam natus dolore vitae eligendi assumenda inventore corrupti maiores nostrum voluptates sunt consectetur obcaecati minima quam et molestiae accusantium.</p>
            </a>
            <a className={style.a} href="/projects/project2">
                <img src={image} alt="foto" height="260px"/>
                <h1>Project2</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deleniti architecto, veniam natus dolore vitae eligendi assumenda inventore corrupti maiores nostrum voluptates sunt consectetur obcaecati minima quam et molestiae accusantium.</p>
            </a>
            <a className={style.a} href="/projects/project3">
                <img src={image} alt="foto" height="260px"/>
                <h1>Project3</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deleniti architecto, veniam natus dolore vitae eligendi assumenda inventore corrupti maiores nostrum voluptates sunt consectetur obcaecati minima quam et molestiae accusantium.</p>
            </a>
        </div>
    )
};

export default Projects;