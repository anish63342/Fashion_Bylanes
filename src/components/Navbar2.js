import React from 'react'
import {AppBar, Toolbar, Box}  from '@mui/material';
import LogoImg from '../assests/logoimg.svg';
 import { Link } from "react-scroll";
 import {mobile} from '../responsive';
 import styled from 'styled-components';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Ul = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  font-weight: bold;
  font-size: 20px;
  font-family: Lato;
  cursor: pointer;
  ${mobile({ display: "none"})}
  `;

 const Navbar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
    <React.Fragment>
      <AppBar sx={{background: 'rgba(0,0,0,0)', boxShadow: 'none' }}  xs={{span:4}} id="Navbar" position="static" >
        <Toolbar >
          <Box>
            <img alt="" src={LogoImg} width="200px" height="75%"  />
          </Box>
          <ul style={{listStyleType: 'none',width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', color: 'white', fontWeight: 'bold', fontSize: '18px', fontFamily: 'Lato', cursor: 'pointer' }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="partner" spy={true} smooth={true}>
              Partner With Us
              </Link>
            </li>
            {/* <li>
              <Link to="works" spy={true} smooth={true}>
                Services
              </Link>
            </li> */}
            <li>
              <Link to="explore" spy={true} smooth={true}>
                Explore
              </Link>
            </li>
            <li>
              <Link to="careers" spy={true} smooth={true}>
                Careers
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact Us
              </Link>
            </li>
          </ul>
          {/* <Tabs sx={{marginLeft: 'auto',  marginRight: 'auto' }} textColor= "white">
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}}  label= "Home" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "About Us" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Partner With Us" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Explore" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Careers" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Contact Us" />
          </Tabs> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Navbar;