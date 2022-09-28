
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'
import styled from 'styled-components'
import { Autoplay, Pagination, Navigation } from "swiper";
import blacklogo from '../assests/Used_Black FBL  1.png';
import img2 from '../assests/Group 199.png';
import img3 from '../assests/Rectangle 40.png'
import Navbar from './Navbar';
import { Button } from '@mui/material';

const Div = styled.div`
  height: 100vh;
  background-color: #194A47;
  `;

const Container = styled.div`
  padding-top: 240px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  `;

const Container2 = styled.div`
  padding-top: 240px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  `;

const Container3 = styled.div`
  padding-top: 240px;
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  `;


const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  `;


const LandingText2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
  `;

const LandingText3 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  align-items: center;
  `;

const LandingImg = styled.div`
  height: 100%;
  display: block;
  `;

const LandingImg2 = styled.div`
  height: 100%;
  `;

const Heading = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  font-size: 70px;
  font-family: 'Poppins', sans-serif;
  `;

const Heading2 = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  `;

const Text1 = styled.span`
  color: white;
  font-family: "poppins", sans-serif;
  font-weight: bold;
  
  `;

const Text2 = styled.span`
  color: #FB6542;
  font-family: "poppins", sans-serif;
  font-weight: bold;
  
  `;

const Desc = styled.p`
  font-size: 20px;
  color: white;
  font-family: "inter", sans-serif;
  width: 30vw;
  text-align: left;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  `;
const Line = styled.span`
  display: flex;
  padding: 0px;
  `;

const Header = () => {
  return (
    <Div>
        <Swiper
        
        autoplay={{
          delay: 5000,
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
              <br/>
              <br/>
              <br/>
              <br/>
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
              {/* <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <Desc>We are a multi-vendor platform intending to provide the designers from the bylanes of India a Global exposure.</Desc> */}
            </LandingText>
            <LandingImg><img alt="" src={blacklogo} height="100%" width= "100%" /></LandingImg>
          </Container>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>
          <Container2>
            <LandingImg2>
              <img alt="" src={img2} height="100%" width= "100%" />
            </LandingImg2>
            <LandingText2>
              <Heading2>
                <Line>
                  <Text1>Communicate</Text1>
                  <Text2>&nbsp;Art</Text2>
                  <Text1>&nbsp;through</Text1>
                  <Text2>&nbsp;Fashion</Text2>
                </Line>
              </Heading2>
              <br/>
              <br/>
              <Desc>The convergence of art and fashion is divine. Indian artisans have been channelling their emotions, thoughts and ideas through their work for ages making Indian Fashion a testament that clothing can revolutionize the minds of many. Khadi, Kalamkari, Ikat, and many more are not just wardrobe staples but reflect rich Indian heritage. </Desc>
            </LandingText2>
          </Container2>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor: '#194A47'}}>
          <Container3>
            <LandingImg2><img alt="" src={img3} height="100%" width="100%" /></LandingImg2>
            <LandingText3>
              <Desc>Customers are free to transform garments, accessories and footwear into products reflecting their personal style with the assistance of designers and stylists across the country. We urge our customers to explore the designs on our platforms and gladly offer personalization according to their taste. </Desc>
              <Button variant="contained" size="large" color="error">Know More</Button>
            </LandingText3>
          </Container3>
        </SwiperSlide>
      </Swiper>
    </Div>
  )
}

export default Header