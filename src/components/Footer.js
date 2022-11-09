import React from 'react'
import styled from 'styled-components'
import LogoImg from '../assests/logo.png';
import { LinkedIn, Twitter, Instagram, Facebook, Done} from '@mui/icons-material';
import {mobile} from '../responsive';
import useMediaQuery from '@mui/material/useMediaQuery';

const Container = styled.div`
    background-color : #194A47;
    padding-top: 10px;
    display : flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: start;
    ${mobile({ flexDirection: "column", alignItems:"center"})};
    padding-bottom: 20px;
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
    color: white;
    
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
    ${mobile({ width: "60px", height: "60px"})}
    
`;



const Logo = styled.div`
    display: flex;
    flex-direction: row;
    margin : 18px 0px 18px 0px;
    ${mobile({ justifyContent: "center"})}
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
    ${mobile({ textAlign: "center", fontWeight: "light", fontSize: "1rem"})};
    `;

const C1 = styled.div`
    justify-content: left;
    ${mobile({display: "flex", flexDirection: "column", alignItems: "center"})}
    `;

const C2 = styled.div`
    justify-content: right;
    ${mobile({display: "flex", flexDirection: "column", alignItems: "center"})}
    `;

const Para = styled.p`
    ${mobile({ alignItems: "center", fontSize: "1.5rem"})}
`;


export default function Footer() {
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <div id="contact">
        <Container>
            <Left>
                <Logo>
                {isMobile?(<img alt="" src={LogoImg} width="300px" height="80%" />):(<img alt="" src={LogoImg} width="240px" height="80%" />)}
                </Logo>
                <SocialContainer>
                    <SocialIcon >
                        <a href="https://www.facebook.com/fashionbylanes">{isMobile?(<Facebook style={{fill: 'white', fontSize: '2.5rem'}} />):(<Facebook style={{fill: 'white'}} />)}</a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href="https://www.instagram.com/fashionbylanes/?hl=en">
                            {isMobile?(<Instagram style={{fill: 'white', fontSize: '2.5rem'}} />):(<Instagram style={{fill: 'white'}} />)}
                            </a> 
                    </SocialIcon>
                    <SocialIcon>
                    <a href="https://mobile.twitter.com/fashionbylanes">{isMobile?(<Twitter style={{fill: 'white', fontSize: '2.5rem'}} />):(<Twitter style={{fill: 'white'}} />)}</a>  
                    </SocialIcon>
                    <SocialIcon>
                    <a href="https://www.linkedin.com/company/fashion-bylanes/">{isMobile?(<LinkedIn style={{fill: 'white', fontSize: '2.5rem'}} />):(<Instagram style={{fill: 'white'}} />)}</a>  
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                    {isMobile?(
                    <C1>
                        <h1 style={{ textAlign: "center", fontSize: '2.2rem'}}>
                            Contact Us
                        </h1>
                        <Para style={{fontSize: '1.8rem', marginTop: '0.5rem', marginBottom: '0.5rem'}}> 
                            +91 8500366066<br/>
                            +91 8500866066
                        </Para>
                        <Para style={{fontSize: '1.8rem', marginTop: '1rem'}}>
                            info@srgauni.com
                        </Para>
                        <Address>
                            2-2-23/22/30, 2nd Floor<br/>
                            DD Colony, Baghamberpet,<br/>
                            Hyderabad, TG, India -500013
                        </Address>
                    </C1>):(
                        <C1>
                            <h1>
                                Contact Us
                            </h1>
                            <Address>
                                2-2-23/22/30, 2nd Floor<br/>
                                DD Colony, Baghamberpet,<br/>
                                Hyderabad, TG, India -500013
                            </Address>
                            <Para> 
                                +91 8500366066<br/>
                                +91 8500866066
                            </Para>
                            <Para>
                                info@srgauni.com
                            </Para>
                </C1>
                    )}
                    
            </Center>
            <Right>
                <C2>
                {isMobile?(
                <div >
                    <h1 style={{textAlign : "center"}}>Email Us</h1>

                    <InputContainer>
                        <Input placeholder="Enter your e-mail"/>
                        <Button>
                            <Done style={{color: 'white'}}/>
                        </Button>
                    </InputContainer>
                </div>
                ):(
                    <div>
                        <h1>Subscribe</h1>
                        <p>Join our subscribers list to get latest<br/> news, updates and special offers.</p>
                        <InputContainer>
                            <Input placeholder="Enter your e-mail"/>
                            <Button>
                                <Done style={{color: 'white'}}/>
                            </Button>
                        </InputContainer>
                    </div>
                )}
                    
                </C2>
            </Right>
        </Container>
    </div>
  )
}