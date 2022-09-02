
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'
import styled from 'styled-components'
import { Autoplay, Pagination, Navigation } from "swiper";
import blacklogo from '../assests/Used_Black FBL  1.png';
import Navbar from './Navbar';

const Div = styled.div`
  height: 100vh;
  background-color: #194A47;
  `;

const LandingText = styled.div`
  
  `;

const LandingImg = styled.div`
  
  `;

const Header = () => {
  return (
    <Div>
        <Swiper
        
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

      >
        <Navbar/>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>
          <div>
            <p  style={{color: 'white',textAlign:'left'}}>
            <h1>FASHION</h1> 
            made easy for you.<br></br>
            A cordial space showcasing the best of multi-designer<br></br> collections of clothing, footwear and accessories for<br></br> Men, Women, and Kids.
            </p>
          </div>
          <img alt="" src={blacklogo} height="50%" width= "50%" />
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>
        <p  style={{color: 'white',textAlign:'left'}}>
          <h1>Crafted in India,</h1> 
          Packaged to the World.<br></br>
          A cordial space showcasing the best of multi-designer<br></br> collections of clothing, footwear and accessories for<br></br> Men, Women, and Kids.
          </p>
          <img alt="" src={blacklogo} height="50%" width= "50%" />
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>Slide 3</SwiperSlide>
      </Swiper>
    </Div>
  )
}

export default Header