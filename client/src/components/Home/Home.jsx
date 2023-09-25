import image from "../../assets/example.jpg";
import style from "./Home.module.css";

const Home = () => {

    return(
        <div className={style.homeContainer}>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sequi facilis, praesentium numquam minima, dolorem mollitia labore assumenda voluptas ut enim aliquid quidem odit beatae rerum necessitatibus soluta ab tenetur!</p>
            <img className={style.image} src={image} alt="Fotografía" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repudiandae aliquam quo necessitatibus ea ducimus voluptate, fuga veniam debitis soluta atque dolore quis! Cum rerum cumque autem at. Voluptatem, quo!</p>
        </div>
    )
};

export default Home;