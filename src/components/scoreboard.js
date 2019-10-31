import React, { useState } from 'react';

import Btn from './button';

import styled from 'styled-components';

import bgrnd from '../img/giants.jpg';

const Container = styled.div`
    background-image: url(${bgrnd});
    background-size: cover;
    height: 100vh;
    background-position: center;
`;

function scoreboard() {
    const [ball , setBall] = useState(0);
    const [strike, setStrike] = useState(0);

    return (
       <Container>
            <Btn className="ball" onClick={() => setBall(ball + 1)}>ball</Btn>
       </Container>
    )
}

export default scoreboard
