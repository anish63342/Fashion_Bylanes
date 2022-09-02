
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

const Container = styled.div`
  padding-top: 240px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;

const LandingText = styled.div`
  display: flex;
  flex-direction: column;

  `;

const LandingImg = styled.div`
  height: 100%;
  display: block;
  `;

const Heading = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  `;

const Text1 = styled.h1`
  color: white;
  font-family: "poppins", sans-serif;
  font-weight: bold;
  font-size: 50px;
  `;

const Text2 = styled.h1`
  color: #FB6542;
  font-family: "poppins", sans-serif;
  font-weight: bold;
  font-size: 50px;
  `;

const Desc = styled.p`
  font-size: 20px;
  color: white;
  font-family: "inter", sans-serif;
  width: 30vw;
  text-align: center;
  `;
const Line = styled.div`
  display: flex;
  flex-direction: row;
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
          <Container>
            <LandingText>
              <Heading>
                <Line>
                  <Text1>Crafted in</Text1>
                  <Text2>&nbsp;India,</Text2>
                </Line>
                <Line>
                  <Text1>Packaged for the </Text1>
                  <Text2>&nbsp;World.</Text2>
                </Line>
              </Heading>
              <Desc>We are a multi-vendor platform intending to provide the designers from the bylanes of India a Global exposure.</Desc>
            </LandingText>
            <LandingImg><img alt="" src={blacklogo} height="100%" width= "100%" /></LandingImg>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>Slide 3</SwiperSlide>
      </Swiper>
    </Div>
  )
}

export default Header