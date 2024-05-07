import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../assets/images/carousel1.jpg'
import img2 from '../assets/images/carousel2.jpg'
import img3 from '../assets/images/carousel3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./slider/Slide";
const Carosel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        classNameName="mySwiper"
      >
        <SwiperSlide>
            <Slide img={img1} ></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide img={img2}></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide img={img3}></Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carosel;
