import React from 'react'
import styled from 'styled-components'
import img1 from '../assests/Vendor.png';
import img2 from '../assests/Influencer.png';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Container = styled.div`
    background-color : #FFE7E7;
    padding-top: 60px;
    padding-bottom: 60px;
    `;

const Container2 = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: space-around;
    `;

const Container3 = styled.div`
    display : flex;
    flex-direction : column;
    
    align-items: center;
    `;

const ImgContainer = styled.div`
    display: block;
    display: flex;
    justify-content: center;
    
  `;

const Heading1 = styled.div`
    font-weight: bolder;
    font-size: 36px;
    color: #E57A7A;
    font-family: "Inter", sans-serif;
    text-align: center;
    padding-bottom: 60px;
    `;

const Heading2 = styled.div`
    padding-top: 15px; 
    font-weight: bold;
    font-size: 28px;
    color: #194A47;
    font-family: "Lato", sans-serif;
    text-align: center;
  `;

const Text = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 18px;
    color: #6C6C6C;
    font-family: "Lato", sans-serif;
    text-align: left;
`;

const TextContainer = styled.div`
  width: 40vw;
  color: #585858;
  font-style: "lato", sans-serif;
  padding-bottom: 20px;
  `;

const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    align-items: center;
    justify-content: end;
`;

export default function Partner() {
  const isMobile = useMediaQuery('(max-width:640px)');
  return (
    <div id="partner">
        {isMobile ?(
            <Container style={{paddingTop: "2rem"}}>
            <Heading1 style={{paddingBottom: "0.5rem"}}>
                Partner With Us
            </Heading1>
            <Container2 style={{flexDirection: "column"}}>
                <Container3 style={{paddingBottom: "2.5rem"}}>
                    <Heading2 style={{paddingTop: "0.1rem", fontSize: "2.2rem", paddingBottom: "0.4rem"}}>
                        As Vendor
                    </Heading2>
                    <ImgContainer>
                        <img alt="" src={img1} height="225" width= "225" />
                    </ImgContainer>
                    <TextContainer style={{width:"85vw"}}>
                        <Text>
                        The art and designs from India are certain to be accepted by a Global audience and could cause a frenzy. The idea to launch globally originates from expanding clothing worldwide as well as spreading the roots of our culture too. Our primary focus is the traditional handloom and textile industries, designers, boutiques, small businesses, street markets in the country that are flourishing with homegrown talents to help them increase the scalability and aid in the expedition of becoming bigger. 
                        </Text>
                    </TextContainer>
                    <Button variant="contained" size="large" style = {{backgroundColor: '#FB6542', width: '180px'}}>Join Us</Button>
                </Container3>
                <Container3>
                    <Heading2 style={{paddingTop: "0.1rem", fontSize: "2.2rem", paddingBottom: "0.4rem"}}>
                        As Influencer
                    </Heading2>
                    <ImgContainer>
                        <img alt="" src={img2} height="225" width= "225" />
                    </ImgContainer>
                    <TextContainer style={{width:"85vw"}}>
                        <Text>
                        Influencer marketing has been the most successful strategy for styling and fashion in the recent times. We plan to bridge the gap between the designers and influencers by tapping onto this sector. Influencers across the country will be provided with an opportunity to connect with likeminded designers and work along with them.  
                        </Text>
                    </TextContainer>
                    <ButtonContainer><Button variant="contained" size="large" style = {{backgroundColor: '#FB6542', width: '180px'}}>Join Us</Button></ButtonContainer>  
                </Container3>
            </Container2>
        </Container>
        ):(
            <Container>
            <Heading1>
                Partner With Us
            </Heading1>
            <Container2>
                <Container3>
                    <ImgContainer>
                        <img alt="" src={img1} height="350" width= "350" />
                    </ImgContainer>
                    <Heading2>
                        As Vendor
                    </Heading2>
                    <TextContainer>
                        <Text>
                        The art and designs from India are certain to be accepted by a Global audience and could cause a frenzy. The idea to launch globally originates from expanding clothing worldwide as well as spreading the roots of our culture too. Our primary focus is the traditional handloom and textile industries, designers, boutiques, small businesses, street markets in the country that are flourishing with homegrown talents to help them increase the scalability and aid in the expedition of becoming bigger. 
                        </Text>
                    </TextContainer>
                    <Button variant="contained" size="large" style = {{backgroundColor: '#FB6542', width: '180px'}}>Join Us</Button>
                </Container3>
                <Container3>
                    <ImgContainer>
                        <img alt="" src={img2} height="350" width= "350" />
                    </ImgContainer>
                    <Heading2>
                        As Influencer
                    </Heading2>
                    <TextContainer>
                        <Text>
                        Influencer marketing has been the most successful strategy for styling and fashion in the recent times. We plan to bridge the gap between the designers and influencers by tapping onto this sector. Influencers across the country will be provided with an opportunity to connect with likeminded designers and work along with them.  
                        </Text>
                    </TextContainer>
                    <ButtonContainer><Button variant="contained" size="large" style = {{backgroundColor: '#FB6542', width: '180px'}}>Join Us</Button></ButtonContainer>
                    
                </Container3>
            </Container2>
        </Container>
        )}
        
    </div>
  )
}
