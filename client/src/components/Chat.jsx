import React from "react";
import MessageHub from "./MessageHub.jsx";
import SendMessage from "./SendMessage.jsx";
import styled from "styled-components";
import store from "../store.js";

const StyledChatBox = styled.div`
  display: grid;
  grid-template-rows: 19fr 1fr;
  border-radius: 2%;
  background: F8F8FF25;
  border: ${(props) => props.windowWidth * 0.01}px solid black;
  height: ${(props) => props.windowWidth * 0.6}px;
  width: ${(props) => props.windowWidth * 0.32}px;
  margin: auto;
  position: relative;
  color: white;
`;

const StyledBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

function Chat() {
  const props = store.getState();

  return (
    <StyledChatBox windowWidth={props.clientProps.windowWidth}>
      <div id="chat">
        <MessageHub />
        <SendMessage />
      </div>
      <StyledBlur />
    </StyledChatBox>
  );
}

export default Chat;
