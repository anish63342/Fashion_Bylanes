import React from 'react'
import styled from 'styled-components'
import img1 from '../assests/Vendor.png';
import img2 from '../assests/Influencer.png';
import { Button } from '@mui/material';

const Container = styled.div`
    background-color : #FFE7E7;
    padding-top: 100px;
    padding-bottom: 40px;
    `;

const Container2 = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: space-around;
    
    `;

const Container3 = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-around;
    align-items: center;
    `;

const ImgContainer = styled.div`
    height: 100%;
    display: block;
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
  `;

const Heading1 = styled.div`
    font-weight: bold;
    font-size: 36px;
    color: #E57A7A;
    font-family: "inter", sans-serif;
    text-align: center;
    padding-bottom: 100px;
    `;

const Heading2 = styled.div`
    padding-top: 15px; 
    font-weight: bold;
    font-size: 28px;
    color: #194A47;
    font-family: "inter", sans-serif;
    text-align: center;
  `;

const Text = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 18px;
    color: #6C6C6C;
    font-family: "inter", sans-serif;
    text-align: center;
`;

const TextContainer = styled.div`
  width: 25vw;
  color: #585858;
  font-style: "lato", sans-serif;
  padding-bottom: 20px;
  `;



const Partner = () => {
  return (
    <Container>
        <Heading1>
            Partner With Us
        </Heading1>
        <Container2>
            <Container3>
                <ImgContainer>
                    <img alt="" src={img1} height="99%" width= "100%" />
                </ImgContainer>
                <Heading2>
                    As Vendor
                </Heading2>
                <TextContainer>
                    <Text>
                        We believe fashion has no boundaries, and with the idea of launching globally we are not only expanding the clothing worldwide, but we are spreading the roots of our culture too. We are providing the designers with a platform to make their art resonate.
                    </Text>
                </TextContainer>
                <Button variant="contained" size="medium" color="error">Join Us</Button>
            </Container3>
            <Container3>
                <ImgContainer>
                    <img alt="" src={img2} height="100%" width= "100%" />
                </ImgContainer>
                <Heading2>
                    As Influencer
                </Heading2>
                <TextContainer>
                    <Text>
                    Influencer marketing has been the most successful strategy for styling and fashion brands. The reach through influencer marketing has been tremendous, and we at FBL are impending this opportunity and buckling ourselves to coin this reach for our benefit. 
                    </Text>
                </TextContainer>
                <Button variant="contained" size="medium" color="error">Join Us</Button>
            </Container3>
        </Container2>
    </Container>
  )
}

export default Partner