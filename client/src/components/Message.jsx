import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.div`
    font-size:  ${props => props.windowHeight*.025}px;
    word-wrap: break-word;
    max-width: ${props => props.windowHeight*.32}px;
`;

function Message(props) {
    return (
        <StyledMessage id='message' windowHeight={props.windowHeight}>
        {props.message.name}: {props.message.message}
        </StyledMessage>
    );
}

export default Message;