import React from 'react';
import styled from 'styled-components';
import Message from './Message.jsx';
import store from '../store.js'

const StyledMessageHub = styled.div`
  overflow: auto;
  min-height: ${props => props.windowHeight*.57}px;
  max-height: ${props => props.windowHeight*.57}px;
`;

function MessageHub() {
    const props = store.getState();
    var messages = props.boardProps.messages;
  var messageList = messages.map((message, messageIndex) => { 
      return (<Message message={message} windowHeight={props.clientProps.windowHeight} key={messageIndex}/>)
    })

return (
    <StyledMessageHub windowHeight={props.clientProps.windowHeight}>
      <div id='messages'>
        {messageList}
      </div>
    </StyledMessageHub>
  );
}

export default MessageHub;