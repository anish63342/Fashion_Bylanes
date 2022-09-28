import React from 'react'
import styled from 'styled-components'
import CopyrightIcon from '@mui/icons-material/CopyrightOutlined';

const Container = styled.div`
  background-color: #FB6542;
  
  `;

const Text = styled.div`
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    `;

const Copyright = () => {
  return (
    <Container>
        <Text>Copyright <CopyrightIcon style={{fontSize: "small"}}/> 2022 SR Gauni Fashion and Apparel Pvt. Ltd.  All rights reserved</Text>
    </Container>
  )
}

export default Copyright