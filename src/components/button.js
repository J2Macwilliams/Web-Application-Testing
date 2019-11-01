import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
font-size: 1.5rem;
background: orange;
border-radius: 9px;
`;

const button = (props) => {
    return (
        <div>
            <Button onClick={props.onClick}>{props.name}</Button>
        </div>
    )
}

export default button
