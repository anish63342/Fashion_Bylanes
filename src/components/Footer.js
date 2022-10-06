import React from 'react'
import styled from 'styled-components'
import LogoImg from '../assests/logo.png';
import { LinkedIn, Twitter, Instagram, Facebook, Done} from '@mui/icons-material';

const Container = styled.div`
    background-color : #194A47;
    padding-top: 10px;
    display : flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: start;
    `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    `;

const Right = styled.div`
    flex: 1;
    color: white;
    font-family: "inter", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: right;
    `;

const SocialContainer = styled.div` 
    display: flex;
    justify-content: space-around;
`;

const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`;



const Logo = styled.div`
    display: flex;
    flex-direction: row;
    margin : 18px 0px 18px 0px;
    `;

const InputContainer = styled.div`
    height: 30px;
    width: 240px;
    background-color: white;
    display: flex;
    flex-direction: row;
    border: 1px solid lightgrey;
`;

const Input = styled.input`
    padding-left: 10px;
    border: none;
    justify-content: center;
`;

const Button = styled.button`
    width: 40px;
    height: 30px;
    border: none;
    background-color: #375E97;
    margin-left: auto; 
    margin-right: 0;
`;

const Address = styled.div`
    text-align: left;
    font-family: "Inter", sans-serif;
    `;

const C1 = styled.div`
    justify-content: left;
    `;

const C2 = styled.div`
    justify-content: right;
    `;

const Footer = () => {
  return (
    <div id="contact">
        <Container>
            <Left>
                <Logo>
                    <img alt="" src={LogoImg} width="240px" height="80%" />
                </Logo>
                <SocialContainer>
                    <SocialIcon >
                        <a href="https://www.facebook.com/fashionbylanes"><Facebook style={{fill: 'white'}} /></a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href="https://www.instagram.com/fashionbylanes/?hl=en"><Instagram style={{fill: 'white'}} /></a> 
                    </SocialIcon>
                    <SocialIcon>
                    <a href="https://mobile.twitter.com/fashionbylanes"><Twitter style={{fill: 'white'}} /></a>  
                    </SocialIcon>
                    <SocialIcon>
                    <a href="https://www.linkedin.com/company/fashion-bylanes/"><LinkedIn style={{fill: 'white'}} /></a>  
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <C1>
                    <h1>
                        Contact Us
                    </h1>
                    <Address>
                        2-2-23/22/30, 2nd Floor<br/>
                        DD Colony, Baghamberpet,<br/>
                        Hyderabad, TG, India -500013
                    </Address>
                    <p> 
                        +91 8500366066<br/>
                        +91 8500866066
                    </p>
                    <p>
                        info@srgauni.com
                    </p>
                </C1>
            </Center>
            <Right>
                <C2>
                    <h1>Subscribe</h1>
                    <p>Join our subscribers list to get latest<br/> news, updates and special offers.</p>
                    <InputContainer>
                        <Input placeholder="Enter your e-mail"/>
                        <Button>
                            <Done style={{color: 'white'}}/>
                        </Button>
                    </InputContainer>
                </C2>
            </Right>
        </Container>
    </div>
  )
}

export default Footer