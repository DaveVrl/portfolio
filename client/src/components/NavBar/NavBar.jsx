import style from "./NavBar.module.css";

const NavBar = () => {

    return (
        <div className={style.navContainer}>
            <img src="/" alt="" />
            <button>Home</button>
            <button>Projects</button>
            <button>About</button>
        </div>
    )
};

export default NavBar;