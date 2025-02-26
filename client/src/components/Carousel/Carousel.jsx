// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import img1 from '../../assets/taskunity/cap.png';
import img2 from '../../assets/taskunity/2-About.png';
import img3 from '../../assets/taskunity/Login.png';
import img4 from '../../assets/taskunity/6-Home.png';
import img5 from '../../assets/taskunity/7-Boards.png';
import img6 from '../../assets/taskunity/8-Members.png';
import img7 from '../../assets/taskunity/9-Options.png';
import img8 from '../../assets/taskunity/10-Work-Board.png';
import img9 from '../../assets/taskunity/11-Skeletons-Board.png';

const Carousel = () => {
    return (
        <>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          userSelect:'none'
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
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
      </Swiper>
        </>
    )
};

export default Carousel;