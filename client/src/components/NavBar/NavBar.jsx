import style from "./NavBar.module.css";
import image from "../../assets/example.jpg"
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className={style.navContainer}>
            <img className={style.logo} src={image} alt="Logo" />
            <button onClick={()=>{navigate("/")}}>Home</button>
            <button onClick={()=>{navigate("/projects")}}>Projects</button>
            <button>About</button>
        </div>
    )
};

export default NavBar;