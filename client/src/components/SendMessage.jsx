import React from 'react';
import styled from 'styled-components';
import store from '../store.js'
import setNewChatTextField from '../actions/chatTextFieldAction.js';
import sendMessage from '../actions/sendMessageAction.js';

const StyledSendButton = styled.button`
    box-sizing: boarder-box;
    border: 1px solid black;    
    height: ${props => props.windowHeight*.03}px;
    width: ${props => props.windowHeight*.08}px;
    font-size: ${props => props.windowHeight*.025}px;
    text-align: center;
    user-select: none;
    display: inline-block;
`;

const StyledMessageField = styled.input`
    box-sizing: boarder-box;
    border: 1px solid black; 
    height: ${props => props.windowHeight*.03}px;
    width: ${props => props.windowHeight*.23}px;
    font-size: ${props => props.windowHeight*.025}px;
    padding: 0px;
`;

function SendMessage() {
    const props = store.getState();

return (
      <div id='sendMessage'>
          <StyledSendButton windowHeight={props.clientProps.windowHeight} id='sendButton' onClick={() => {store.dispatch(sendMessage(props.clientProps.name, props.chatProps.chatTextField, props.boardProps.lobby))}}>Send</StyledSendButton>
          <StyledMessageField windowHeight={props.clientProps.windowHeight} id='sendInput' type='text' name='Send' placeholder='message' value={props.chatProps.chatTextField} onChange={(e) => {store.dispatch(setNewChatTextField(e))}}></StyledMessageField>
      </div>
  );
}

export default SendMessage;