import arrowImage from '../../assets/down-arrow.png';
import style from './DownArrow.module.css';

const DownArrow = () => {
    
    return (
        <div className={style.arrow_down_general_container}>
            <hr className={style.hrs} />
            <img className={style.arrow_img} src={arrowImage} alt="down arrow" />
            <hr className={style.hrs} />
        </div>
    )
};

export default DownArrow;