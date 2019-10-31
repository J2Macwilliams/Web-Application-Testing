import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
font-fize: 1.5rem;
`;

const button = () => {
    return (
        <div>
            <Button >{props.name}</Button>
        </div>
    )
}

export default button
