import React from 'react'
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import img1 from '../assests/work.png';
import img2 from '../assests/flexible.png';
import img3 from '../assests/healthy.png';
import img4 from '../assests/diverse.png';

const Container = styled.div`
    background-color : white;
    padding-top: 100px;
    padding-bottom: 40px;
    `;

const ImgContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  padding-bottom: 60px;
  `;

const Heading = styled.div`
    font-weight: bold;
    font-size: 36px;
    color: #E57A7A;
    font-family: "inter", sans-serif;
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
    font-family: "inter", sans-serif;
    text-align: center;`;

const Text2 = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    
    font-size: 20px;
    color: #6C6C6C;
    font-family: "inter", sans-serif;
    text-align: left;
`;

const Text3 = styled.div`
    width: 30vw;
    padding-top: 40px;
    padding-bottom: 10px;
    font-size: 24px;
    color: #6C6C6C;
    font-family: "inter", sans-serif;
    text-align: center;
`;

const Middle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
    `;

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: white;
    padding-top: 80px;
    `;

const Img = styled.div`
    display: flex;
    justify-content: center;
    `;

const Work = () => {
  return (
    <div>
        <Container>
            <Heading>
                Work At FBL
            </Heading>
            <Text>Be a part of fine Indian Craftsmanship with real-time shopping at  Fashion ByLanes. </Text>
        </Container>
        <Middle><Divider variant="middle" width="50%" /></Middle>
        <Container1>
            <TextContainer>
                <Text2>
                We are here to showcase the new and upcoming boutique designer collections available all over India. Our vision is to present fashion in a more native way. At FBL, we are dedicated to identifying and encouraging emerging talent from around the country. 
                </Text2>
                <ButtonContainer>
                    <Button variant="contained" size="medium" color="error">Explore Careers</Button>
                </ButtonContainer>
            </TextContainer>
            <ImgContainer>
                <img alt="" src={img1} height="120%" width= "120%" />
            </ImgContainer>
        </Container1>
        <Container2>
            <ImgContainer>
                <Img><img alt="" src={img2} height="60%" width= "60%" /></Img>
                <Text3>
                    Flexible Work Schedules
                </Text3>
            </ImgContainer>
            <ImgContainer>
            <Img><img alt="" src={img3} height="60%" width= "60%" /></Img>
                <Text3>
                    Healthy and Hospitable Environment  
                </Text3>
            </ImgContainer>
            <ImgContainer>
            <Img><img alt="" src={img4} height="60%" width= "60%" /></Img>
                <Text3>
                    Diverse and Inclusive
                </Text3>
            </ImgContainer>
        </Container2>
    </div>
  )
}

export default Work