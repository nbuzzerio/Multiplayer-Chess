import React from "react";
import styled from "styled-components";
import Message from "./Message.jsx";
import store from "../store.js";

const StyledMessageHub = styled.div`
  max-height: ${(props) => props.windowWidth * 0.57}px;
  overflow: auto;
  padding: 0;
  cursor: pointer;
`;

function MessageHub() {
  const props = store.getState();
  var messages = props.boardProps.messages;
  var messageList = messages.map((message, messageIndex) => {
    return (
      <Message
        message={message}
        windowWidth={Math.min(props.clientProps.windowWidth, props.clientProps.windowHeight)}
        key={messageIndex}
      />
    );
  });

  return (
    <StyledMessageHub windowWidth={Math.min(props.clientProps.windowWidth, props.clientProps.windowHeight)} onClick={() => {document.querySelector('#chat-wrapper').classList.toggle('clicked')}}>
      <div id="messages">{messageList}</div>
    </StyledMessageHub>
  );
}

export default MessageHub;
