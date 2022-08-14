import React from "react";
import styled from "styled-components";
import Message from "./Message.jsx";
import store from "../store.js";

const StyledMessageHub = styled.div`
  overflow: auto;
  min-height: ${(props) => props.windowWidth * 0.57}px;
  max-height: ${(props) => props.windowWidth * 0.57}px;
  padding: 0 10px;
  cursor: pointer;
`;

function MessageHub() {
  const props = store.getState();
  var messages = props.boardProps.messages;
  var messageList = messages.map((message, messageIndex) => {
    return (
      <Message
        message={message}
        windowWidth={props.clientProps.windowWidth}
        key={messageIndex}
      />
    );
  });

  return (
    <StyledMessageHub windowWidth={props.clientProps.windowWidth} onClick={() => {document.querySelector('#chat-wrapper').classList.toggle('clicked')}}>
      <div id="messages">{messageList}</div>
    </StyledMessageHub>
  );
}

export default MessageHub;
