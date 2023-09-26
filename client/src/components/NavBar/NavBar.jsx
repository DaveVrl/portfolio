import style from "./NavBar.module.css";
import image from "../../assets/computer-logo-icon.svg"
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className={style.navContainer}>
            <img className={style.logo} src={image} alt="Logo" />
            <div className={style.containerBtns}>
            <button className={style.navBtn} onClick={()=>{navigate("/")}}>Home</button>
            <button className={style.navBtn} onClick={()=>{navigate("/projects")}}>Projects</button>
            <button className={style.navBtn} onClick={()=>{navigate("/about")}}>About</button>
            </div>
        </div>
    )
};

export default NavBar;