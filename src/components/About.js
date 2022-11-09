import React from 'react'
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import img1 from '../assests/realtime.png';
import img2 from '../assests/personal.png';
import img3 from '../assests/affordable.png';
import img4 from '../assests/launching.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { mobile } from '../responsive';
import line from '../assests/line.png'
const Container = styled.div`
  padding-top: 60px;
  background-color: white;
  padding-bottom: 40px;
  `;

const ImgContainer = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const TextContainerR = styled.div`
  width: 50vw;
  color: #585858;
  font-style: "lato", sans-serif;
  text-align: start;


  `;

const TextContainerL = styled.div`
  width: 50vw;
  color: #585858;
  font-style: "lato", sans-serif;
  text-align: end;
  `;

const Container1 = styled.div`
  background-color: white;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 200px;
  padding-top: 60px;
  ${mobile({height: 'auto'})}
  
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
    `;

const Text2 = styled.div`
    padding-top: 20px;
    padding-bottom: 30px;
    font-size: 20px;
    color: #6C6C6C;
    font-family: "Lato", sans-serif;
    line-height: 1.5;
    ;
`;

const Text3 = styled.div`
    padding-top: 20px;
    padding-bottom: 10px;
    
    font-size: 20px;
    color: #FB6542;
    font-family: "inter", sans-serif;
    text-align: left;
`;

const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
`;

const Txt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const C1 = styled.div`
`;


// const LeftSep = styled.div`
//     display: flex;
//     align-items: left;
//   `;
// const RightSep = styled.div`
//     display: flex;
//     align-items: right;
//     `;

export default function Platform() {
  const isMobile = useMediaQuery('(max-width:640px)');
  return (
    <div id="about" style={{backgroundColor: 'white'}}>
        {isMobile?(
            <C1 style={{padding:'0px 10px 30px 10px'}}>
            <Container style={{paddingBottom:'1rem'}}>
               <Heading style={{paddingBottom:'0rem'}}>
                   About Us
               </Heading>            
           </Container> 
   {/*  <Middle><Divider variant="middle" width="50%" /></Middle> */}
           <Container1 style={{flexDirection: "column", alignItems: "center", paddingTop: "0.5rem"}}>
               <TextContainerR style={{width: "90vw", alignItems: "center", textAlign: "center"}}>
                   <Heading2 style={{alignItems: "center", fontSize: "1.4rem"}}>
                       Real-Time Shopping Experience
                   </Heading2 >
                   <Text2 style={{fontSize: "1.2rem"}}>
                       Browse fashion along with your friends and family with one swipe. FBL allows you to simultaneously view the same product from different devices for more relative engagement.
                   </Text2>
               </TextContainerR>
               <ImgContainer style={{width: "100vw", alignItems: "center", paddingBottom: "1.4rem"}}>
                   <Img><img alt="" src={img1} height="100%" width= "70%" /></Img>
               </ImgContainer>
               <Button variant="contained" size="medium" style = {{backgroundColor: '#E57A7A'}}>View Demo</Button>
               <ImgContainer style={{width: "100vw", alignItems: "center", paddingBottom: "1.4rem", paddingTop: "2rem"}}>
                   <Img><img alt="" src={line} height="100%" width= "100%" /></Img>
               </ImgContainer>
           </Container1>
           {/* <LeftSep><Divider variant="middle" width="50%" color = "#E57A7A" /></LeftSep> */}
           <Container1 style={{flexDirection: "column", alignItems: "center", paddingTop: "1.5rem"}}>
               <TextContainerL style={{width: "100vw", alignItems: "center", textAlign: "center"}}>
                   <Heading2>
                   Personal Fitting Assistance
                   </Heading2>
                   <Text2 style={{fontSize: "1.2rem"}}>
                   Customization made more fun!<br/>
   You can set up a fitting appointment with us and we will send one of our trained professionals to your doorstep to take your measurements and work on the design of your choice. 
                   </Text2>
               </TextContainerL>
               <ImgContainer style={{width: "100vw", alignItems: "center", paddingBottom: "1.4rem"}}>
                   <Img><img alt="" src={img2} height="180" width= "auto" /></Img>
               </ImgContainer>
               <ImgContainer style={{width: "100vw", alignItems: "center", paddingBottom: "1.4rem", paddingTop: "2rem"}}>
                   <Img><img alt="" src={line} height="100%" width= "100%" /></Img>
               </ImgContainer>
           </Container1>
           {/* <RightSep><Divider variant="middle" width="50%" color = "#E57A7A" /></RightSep> */}
           <Container1 style={{flexDirection: "column", alignItems: "center", paddingTop: "1.5rem"}}>
               
               <TextContainerR style={{width: "90vw", alignItems: "center", textAlign: "center"}}>
                   <Heading2>
                   Affordable & Sustainable
                   </Heading2>
                   <Text2 style={{fontSize: "1.2rem"}}>
                   We ensure that each piece you purchase is sustainably made with eco-sensitive materials and non-chemical dyes to step towards more ethical fashion. 
                   </Text2>
               </TextContainerR>
               <ImgContainer style={{width: "100vw", alignItems: "center", paddingBottom: "1.4rem"}}>
                   <Img><img alt="" src={img3} height="100%" width= "70%" /></Img>
               </ImgContainer>
               <ImgContainer style={{width: "100vw", alignItems: "center", paddingBottom: "1.4rem", paddingTop: "2rem"}}>
                   <Img><img alt="" src={line} height="100%" width= "100%" /></Img>
               </ImgContainer>
           </Container1>
           {/* <LeftSep><Divider variant="middle" width="50%" color = "#E57A7A" /></LeftSep> */}
           <Container1 style={{flexDirection: "column", alignItems: "center", paddingTop: "1.5rem"}}>
               <TextContainerL style={{width: "90vw", alignItems: "center", textAlign: "center"}}>
                   <Heading2>
                   Launching Globally
                   </Heading2>
                   <Text2 style={{fontSize: "1.2rem"}}>
                   We believe that fashion has no boundaries and intend to provide our vendors a Global platform to showcase their artistic ability that can resonate with the masses. 
                   </Text2>
               </TextContainerL>
               <ImgContainer style={{width: "100vw", alignItems: "center", paddingBottom: "1.4rem"}}>
                   <Img><img alt="" src={img4} height="100%" width= "70%" /></Img>
               </ImgContainer>
               <ImgContainer style={{width: "100vw", alignItems: "center", paddingBottom: "1.4rem", paddingTop: "2rem"}}>
                   <Img><img alt="" src={line} height="100%" width= "100%" /></Img>
               </ImgContainer>
           </Container1>
           {/* <RightSep><Divider variant="middle" width="50%" color = "#E57A7A" /></RightSep> */}
           </C1>
        ):(
            <C1 style={{padding:'0px 100px 60px 100px'}}>
            <Container>
               <Heading>
                   About Us
               </Heading>            
           </Container> 
   {/*  <Middle><Divider variant="middle" width="50%" /></Middle> */}
           <Container1>
               <ImgContainer>
                   <Img><img alt="" src={img1} height="50%" width= "50%" /></Img>
               </ImgContainer>
               <TextContainerR>
                   <Heading2>
                       Real-Time Shopping Experience
                   </Heading2>
                   <Text2>
                       Browse fashion along with your friends and family with one swipe. FBL allows you to simultaneously view the same product from different devices for more relative engagement.
                   </Text2>
                   <Button variant="contained" size="medium" style = {{backgroundColor: '#E57A7A'}}>View Demo</Button>
               </TextContainerR>
           </Container1>
           {/* <LeftSep><Divider variant="middle" width="50%" color = "#E57A7A" /></LeftSep> */}
           <Container1>
               <TextContainerL>
                   <Heading2>
                   Personal Fitting Assistance
                   </Heading2>
                   <Text2>
                   Customization made more fun!<br/>
   You can set up a fitting appointment with us and we will send one of our trained professionals to your doorstep to take your measurements and work on the design of your choice. 
                   </Text2>
               </TextContainerL>
               <ImgContainer>
                   <Img><img alt="" src={img2} height="180" width= "auto" /></Img>
               </ImgContainer>
               
           </Container1>
           {/* <RightSep><Divider variant="middle" width="50%" color = "#E57A7A" /></RightSep> */}
           <Container1>
               <ImgContainer>
                   <Img><img alt="" src={img3} height="50%" width= "50%" /></Img>
               </ImgContainer>
               <TextContainerR>
                   <Heading2>
                   Affordable & Sustainable
                   </Heading2>
                   <Text2>
                   We ensure that each piece you purchase is sustainably made with eco-sensitive materials and non-chemical dyes to step towards more ethical fashion. 
                   </Text2>
               </TextContainerR>
           </Container1>
           {/* <LeftSep><Divider variant="middle" width="50%" color = "#E57A7A" /></LeftSep> */}
           <Container1>
               <TextContainerL>
                   <Heading2>
                   Launching Globally
                   </Heading2>
                   <Text2>
                   We believe that fashion has no boundaries and intend to provide our vendors a Global platform to showcase their artistic ability that can resonate with the masses. 
                   </Text2>
               </TextContainerL>
               <ImgContainer>
                   <Img><img alt="" src={img4} height="50%" width= "50%" /></Img>
               </ImgContainer>
           </Container1>
           {/* <RightSep><Divider variant="middle" width="50%" color = "#E57A7A" /></RightSep> */}
           </C1>
        )
         
        }
    </div>
  )
}
