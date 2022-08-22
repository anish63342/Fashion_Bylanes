import React from 'react'
import {AppBar, Toolbar, Tabs, Tab, Box}  from '@mui/material';
import LogoImg from '../assests/logoimg.svg'


const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{background: '#194A47'}}>
        <Toolbar>
          <Box>
            <img alt="" src={LogoImg} width="200px" height="75%" />
          </Box>
          <Tabs sx={{marginLeft: 'auto', marginRight: 'auto'}} textColor= "white">
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Home" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "About Us" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Partner With Us" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Explore" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Careers" />
            <Tab sx={{fontFamily:'lato', textTransform: 'capitalize', fontSize: '20px'}} label= "Contact Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Navbar;