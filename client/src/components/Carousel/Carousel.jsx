// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
//taskunity
import img1 from '../../assets/taskunity/cap.png';
import img2 from '../../assets/taskunity/2-About.png';
import img3 from '../../assets/taskunity/Login.png';
import img4 from '../../assets/taskunity/6-Home.png';
import img5 from '../../assets/taskunity/7-Boards.png';
import img6 from '../../assets/taskunity/8-Members.png';
import img7 from '../../assets/taskunity/9-Options.png';
import img8 from '../../assets/taskunity/10-Work-Board.png';
import img9 from '../../assets/taskunity/11-Skeletons-Board.png';
//liliana
import imgLiliana1 from '../../assets/LilianaGamestore/cap22.jpg';
//pokemon
import imgPoke1 from '../../assets/pokemonspa/pokeIntro.jpg';
import imgPoke2 from '../../assets/pokemonspa/poke1.jpg';
import imgPoke3 from '../../assets/pokemonspa/poke2.jpg';
import imgPoke4 from '../../assets/pokemonspa/poke3.jpg';
import imgPoke5 from '../../assets/pokemonspa/poke4.jpg';
//
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Carousel = () => {

  const location = useLocation();
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          userSelect:'none'
        }}
        zoom={true}
        navigation={!isMobile}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {
          location.pathname.includes('/taskunity')
          ? (
            <>
            <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img6} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img7} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img8} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={img9} />
          </div>
        </SwiperSlide>
          </>
           )
          : location.pathname.includes('/liliana-game-store')
          ? (
            <>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src={imgLiliana1} />
              </div>
            </SwiperSlide>
            </>
          )
          : location.pathname.includes('/pokemon-spa')
          ? (
            <>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src={imgPoke1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src={imgPoke2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src={imgPoke3} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src={imgPoke4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src={imgPoke5} />
              </div>
            </SwiperSlide>
            </>
          ) 
          : null
        }
        
      </Swiper>
        </>
    )
};

export default Carousel;