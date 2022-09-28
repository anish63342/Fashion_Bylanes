import React from 'react'
import styled from 'styled-components'
import LogoImg from '../assests/logoimg.svg';
import { LinkedIn, Twitter, Instagram, Facebook, Done} from '@mui/icons-material';

const Container = styled.div`
    background-color : #194A47;
    padding-top: 10px;
    display : flex;
    flex-direction: row;
    justify-content: space-around;
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
    text-align: left;
    `;

const Right = styled.div`
    flex: 1;
    color: white;
    font-family: "inter", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const SocialContainer = styled.div` 
    display: flex;
    
`;

const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;



const Logo = styled.div`
    
    `;

const InputContainer = styled.div`
    height: 30px;
    width: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`;

const Input = styled.input`
    border: none;
    
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #375E97;
`;

const Address = styled.div`
    text-align: center;
    font-family: "Inter", sans-serif;
    `;

const Footer = () => {
  return (
    <div>
        <Container>
            <Left>
                <Logo>
                    <img alt="" src={LogoImg} width="200px" height="75%" />
                </Logo>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
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
            </Center>
            <Right>
                <h1>Subscribe</h1>
                <p>Join our subscribers list to get latest<br/> news, updates and special offers.</p>
                <InputContainer>
                    <Input placeholder="Enter your e-mail"/>
                    <Button>
                        <Done/>
                    </Button>
                </InputContainer>
            </Right>
        </Container>
    </div>
  )
}

export default Footer