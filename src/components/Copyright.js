import React from 'react'
import styled from 'styled-components'
import CopyrightIcon from '@mui/icons-material/CopyrightOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
  background-color: #FB6542;
  
  `;

const Text = styled.div`
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    ${mobile({fontSize:"0.5rem"})}
    `;

const Copyright = () => {
  return (
    <Container>
        <Text>Copyright <CopyrightIcon style={{fontSize: "small", viewBox:"-6 -12 32 32"}}/> 2022 SR Gauni Fashion and Apparel Pvt. Ltd.  All rights reserved</Text>
    </Container>
  )
}

export default Copyright