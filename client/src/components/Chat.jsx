import React from 'react';
import MessageHub from './MessageHub.jsx';
import SendMessage from './SendMessage.jsx';
import styled from 'styled-components';
import store from '../store.js'

const StyledChatBox = styled.div`
  display: grid;
  grid-template-rows: 19fr 1fr;
  border: ${props => props.windowHeight*.01}px solid blue;
  height: ${props => props.windowHeight*.60}px;
  width: ${props => props.windowHeight*.32}px;
  margin: auto;
`;

function Chat() {
    const props = store.getState();

return (
    <StyledChatBox windowHeight={props.clientProps.windowHeight}>
      <div id='chat'>
        <MessageHub />
        <SendMessage />
      </div>
    </StyledChatBox>
  );
}

export default Chat;