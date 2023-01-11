import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar';
import Back from '../components/Back';
import Heading from '../components/Heading';

function ReadPara() {
  return (
    <>
        <Bg>
        <Container>
            <Heading />
            <Back />
        </Container>
        <Navbar />
        </Bg>
    </>
  )
}

const Bg = styled.div`
	background: linear-gradient(to bottom right, #fff, #a158ff);
	margin: 0;
	height: 100vh;
	width: 100vw;
	position: absolute;

	z-index: -2;
	overflow-y: auto;
`;

export default ReadPara;