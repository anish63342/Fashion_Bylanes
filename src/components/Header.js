
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'
import styled from 'styled-components'
import { Autoplay, Pagination, Navigation } from "swiper";

const Div = styled.div`
  height: 100vh;
  background-color: #194A47;
  `;


const Header = () => {
  return (
    <Div>
        <Swiper
        spaceBetween={30}
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

      >
        <SwiperSlide style={{backgroundColor: '#194A47'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>Slide 3</SwiperSlide>
      </Swiper>
    </Div>
  )
}

export default Header