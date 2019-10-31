import React, { useState } from 'react';

import Btn from './button';

import styled from 'styled-components';

import bgrnd from '../img/giants.jpg';

const Container = styled.div`
    background-image: url(${bgrnd});
    background-size: cover;
    height: 100vh;
    background-position: center;

    .board {
        display: flex;
        justify-content: space-evenly;

        .display {
        font-size:2rem;
        width: 40%;
        margin: 5%;
        padding: 2%;
        border-radius: 8px;
        background: white;
        }
    }
    .actions {
        display: flex;
        justify-content:center;
        width: 80%;
        /* justify-content:space-between; */
        
        button {
            margin: 3px;


        }
    }
`;

function Scoreboard() {
    const [ball , setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    console.log(ball)
    return (
       <Container>
           <div className="board">
                <div className="display" >strikes: {strike}</div>
                <div className="display" >balls: {ball}</div>
           </div>
           <div className="actions">
                <Btn name={'Ball'} onClick={() => (ball === 4 ) ? setBall(0) : setBall(ball + 1)}/>
                <Btn name={'Strike'} onClick={() => (strike === 3) ? setStrike(0) : setStrike(strike + 1)}/>
                <Btn name={'Hit'} onClick={() => (setStrike(0) || setBall(0))}/>
                <Btn name={'Foul'} onClick={() => setBall(ball + 1)}/>
            </div>
       </Container>
    )
}

export default Scoreboard
