import React from 'react'
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import img1 from '../assests/realtime.png';
import img2 from '../assests/personal.png';
import img3 from '../assests/affordable.png';
import img4 from '../assests/launching.png';

const Container = styled.div`
  padding-top: 100px;
  background-color: white;
  padding-bottom: 40px;
  `;

const ImgContainer = styled.div`
    height: 100%;
    display: block;
  `;

const TextContainer = styled.div`
  width: 30vw;
  color: #585858;
  font-style: "lato", sans-serif;
  `;

const Container1 = styled.div`
  background-color: white;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 200px;
  padding-top: 60px;
  padding-bottom: 140px;
  `;

const Heading = styled.div`
    font-weight: bold;
    font-size: 36px;
    color: #E57A7A;
    font-family: "Inter", sans-serif;
    text-align: center;
  `;

const Text = styled.div`
    padding-left: 200px;
    padding-right: 200px;
    padding-top: 20px;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 28px;
    color: #6C6C6C;
    font-style: inter;
    text-align: center;
  `;

const Heading2 = styled.div`
    font-weight: bold;
    font-size: 24px;
    color: #194A47;
    font-family: "Inter", sans-serif;
    text-align: left;`;

const Text2 = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 20px;
    color: #6C6C6C;
    font-family: "Lato", sans-serif;
    text-align: left;
`;

const Text3 = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    
    font-size: 20px;
    color: #FB6542;
    font-family: "inter", sans-serif;
    text-align: left;
`;
const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const Platform = () => {
  return (
    <div>
        <Container>
            <Heading>
                A world platform
            </Heading>
            <Text>A cordial space showcasing the best of multi-designer collections of clothing, footwear and accessories for Men, Women, and Kids </Text>
        </Container>
        <Middle><Divider variant="middle" width="50%" /></Middle>
        <Container1>
            <ImgContainer>
                <img alt="" src={img1} height="100%" width= "100%" />
            </ImgContainer>
            <TextContainer>
                <Heading2>
                Real-Time Shopping Experience
                </Heading2>
                <Text2>
                Browse fashion along with your friends and family with one swipe. FBL allows you to simultaneously view the same product from different devices for more relative engagement.
                </Text2>
                <Text3>
                    View Demo
                </Text3>
            </TextContainer>
        </Container1>
        <Container1>
            <TextContainer>
                <Heading2>
                Personal Fitting Assistance
                </Heading2>
                <Text2>
                Customization made more fun!
You can set up a fitting appointment with us and we will send one of our trained professionals to your doorstep to take your measurements and work on the design of your choice. 
                </Text2>
            </TextContainer>
            <ImgContainer>
                <img alt="" src={img2} height="100%" width= "100%" />
            </ImgContainer>
        </Container1>
        <Container1>
            <ImgContainer>
                <img alt="" src={img3} height="100%" width= "100%" />
            </ImgContainer>
            <TextContainer>
                <Heading2>
                Affordable & Sustainable
                </Heading2>
                <Text2>
                We ensure that each piece you purchase is sustainably made with eco-sensitive materials and non-chemical dyes to step towards more ethical fashion. 
                </Text2>
            </TextContainer>
        </Container1>
        <Container1>
            <TextContainer>
                <Heading2>
                Launching Globally
                </Heading2>
                <Text2>
                We believe that fashion has no boundaries and intend to provide our vendors a Global platform to showcase their artistic ability that can resonate with the masses. 
                </Text2>
            </TextContainer>
            <ImgContainer>
                <img alt="" src={img4} height="100%" width= "100%" />
            </ImgContainer>
        </Container1>
        
    </div>
  )
}

export default Platform