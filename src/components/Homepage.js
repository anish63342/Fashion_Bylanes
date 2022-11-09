import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'
import styled from 'styled-components'
import { Autoplay, Pagination, Navigation } from "swiper";
import blacklogo from '../assests/Used_Black FBL  1.png';
import img2 from '../assests/LandingImage2.png';
import img3 from '../assests/Rectangle 40.png'
import Navbar from '../components/Navbar';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawbar from '../components/Drawbar';
import LandingImageMobile3 from '../assests/LandingImageMobile3.png' ;
import LandingImageMobile2 from '../assests/LandingImageMobile2.png' ;


const Div = styled.div`
  height: 100vh;
  background-color: #194A47;
  `;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  `;

const Container2 = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-image: url('LandingImage2.png');
  background-position: center;
  background-size: cover ;
  `;

const Container3 = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  background-image: url('LandingImage3.png');
  background-position: center;
  background-size: cover ;
  `;


const LandingText = styled.div`
  border-top: none;
  margin-top: 0px;
  padding-left: 40px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;


const LandingText2 = styled.div`
  height: 15vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  
  `;

const LandingText3 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  align-items: center;
  `;

const LandingImg = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35vw;
  `;


const Heading = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 7.6vh;
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

const Text3 = styled.span`
  color: #F09A41;
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

const C1 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  `; 

const Tagline = styled.span`
  color: white;
  font-family: "lato", sans-serif;
  font-size: 0.8rem;
  `;

const Div2 = styled.div``;

export default function Header(){
  const isMobile = useMediaQuery('(max-width:640px)');
  return (
    <div>
        {isMobile?(
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
              
              <SwiperSlide style={{backgroundColor: '#194A47'}}>
                <Container style={{flexDirection: 'column'}}>
                  <Drawbar/>
                  <C1 style={{flexDirection: "column"}}>
                    <Tagline style={{paddingTop: "0.5rem"}}>
                    A Unit of SR Gauni Fashion and Apparels Pvt. Ltd.
                    </Tagline>
                    <LandingText  style={{width: "90vw",alignItems: "center", paddingTop: "5rem", paddingLeft: "0rem"}}>
                      <Heading style={{fontSize: "1.35rem"}}>
                        <Line style={{alignItems: "center", justifyContent: "center"}}>
                          <Text1>Crafted in</Text1>
                          <Text2>&nbsp;India,</Text2>
                        </Line>
                        <Line style={{alignItems: "center", justifyContent: "center"}}>
                          <Text1>Packaged for the </Text1>
                          <Text2>&nbsp;World.</Text2>
                        </Line>
                      </Heading>
                    </LandingText>
                    <LandingImg style={{width: "100vw", height: "60vh"}}><img alt="" src={blacklogo} height="100%" width= "100%" /></LandingImg>
                  </C1>
                </Container>
              </SwiperSlide>
              <SwiperSlide > 
                {/* <Container2 style={{backgroundImage: "url('LandingImageMobile2.png')", backgroundSize:"100vh", backgroundRepeat: "no-repeat", backgroundPosition: "left 30% bottom 10%" }}> */}
                <Container2 style={{backgroundImage: "url('LandingBackgroundMobile(5).png')", backgroundSize:"cover", display: "flex", flexDirection: "column"}}>
                  <Drawbar/>
                  <Div2 style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", height: "100%"}}>
                    <LandingImg style={{width: "100vw", height: "50vh"}}><img alt="" src={LandingImageMobile2} height="100%" width= "100%" /></LandingImg>
                    <LandingText2 style={{width: "100vw", height: "5vh"}}>
                        <Heading  style={{fontSize: "1.1rem"}}>
                        <Line>
                            <Text1>Communicate</Text1>
                            <Text3>&nbsp;Art</Text3>
                            <Text1>&nbsp;through</Text1>
                            <Text3>&nbsp;Fashion</Text3>
                        </Line>
                        </Heading>
                    </LandingText2>
                  </Div2>
                  
                </Container2>
              </SwiperSlide>
              <SwiperSlide > 
                {/* <Container3 style={{backgroundImage: "url('LandingImageMobile3.png')", backgroundSize:"cover", backgroundRepeat: "no-repeat", backgroundPosition: "left 43% bottom 10%"}}> */}
                {/* <Container3 style={{backgroundColor: "#194A47", backgroundImage: "url('LandingImageMobile3.png')", backgroundSize:"contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}> */}
                <Container3 style={{backgroundImage: "url('LandingBackgroundMobile(5).png')", backgroundSize:"cover", display: "flex", flexDirection: "column"}}>
                  <Drawbar />
                  <Div2 style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", height: "100%"}}>
                    <LandingImg style={{width: "100vw", height: "70vh"}}><img alt="" src={LandingImageMobile3} height="100%" width= "100%" /></LandingImg>
                    <LandingText2 style={{width: "100vw", height: "5vh", bottom: "10vh"}}>
                        <Heading style={{fontSize: "1.1rem"}}>
                        <Line>
                            <Text3>Personalization</Text3>
                            <Text1>&nbsp;equals</Text1>
                            <Text3>&nbsp;Customization</Text3>
                        </Line>
                        </Heading>
                    </LandingText2>
                  </Div2>
                </Container3>
              </SwiperSlide>
            </ Swiper>
            </Div>
            ):(
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
              
              <SwiperSlide style={{backgroundColor: '#194A47'}}>
                <Container>
                  <Navbar/>
                  <C1 style={{justifyContent: "space-around"}}>
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
                      </LandingText>
                    <LandingImg><img alt="" src={blacklogo} height="100%" width= "auto" /></LandingImg>
                  </C1>
                </Container>
              </SwiperSlide>
              <SwiperSlide > 
                <Container2>
                  <Navbar1 style = {{border : 'none', margin: '0px'}} />
                  <LandingText2 style={{top: "65%"}}>
                    <Heading>
                      <Line>
                        <Text1>Communicate</Text1>
                        <Text3>&nbsp;Art</Text3>
                        <Text1>&nbsp;through</Text1>
                        <Text3>&nbsp;Fashion</Text3>
                      </Line>
                    </Heading>
                  </LandingText2>
                </Container2>
              </SwiperSlide>
              <SwiperSlide > 
                <Container3>
                  <Navbar2 />
                  <LandingText2 style={{top: "65%"}}>
                  <Heading>
                      <Line>
                        <Text3>Personalization</Text3>
                        <Text1>&nbsp;equals</Text1>
                        <Text3>&nbsp;Customization</Text3>
                      </Line>
                    </Heading>
                  </LandingText2>
                </Container3>
              </SwiperSlide>
            </ Swiper>
            </Div>
            )}
    </div>  
  )
}