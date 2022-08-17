import React from "react";
import styled from "styled-components";
import store from "../store.js";
import setNewChatTextField from "../actions/chatTextFieldAction.js";
import sendMessage from "../actions/sendMessageAction.js";

const StyledSendMessage = styled.div`
  display: flex;
  width: ${(props) => props.windowWidth * 0.32}px;
`;

const StyledSendButton = styled.button`
  box-sizing: border-box;
  border: 1px solid black;
  height: ${(props) => props.windowWidth * 0.03}px;
  width: ${(props) => props.windowWidth * 0.08}px;
  font-size: ${(props) => props.windowWidth * 0.025}px;
  text-align: center;
  user-select: none;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`;

const StyledMessageField = styled.input`
  box-sizing: border-box;
  border: 1px solid black;
  height: 100%;
  width: 100%;
  font-size: ${(props) => props.windowWidth * 0.025}px;
  padding: 0px;
`;

function SendMessage() {
  const props = store.getState();

  return (
    <StyledSendMessage
      id="sendMessage"
      windowWidth={Math.min(
        props.clientProps.windowWidth,
        props.clientProps.windowHeight
      )}
    >
      <StyledSendButton
        windowWidth={Math.min(
          props.clientProps.windowWidth,
          props.clientProps.windowHeight
        )}
        id="sendButton"
        onClick={() => {
          store.dispatch(
            sendMessage(
              props.clientProps.name,
              props.boardProps.chatTextField,
              props.boardProps.lobby
            )
          );
        }}
      >
        Send
      </StyledSendButton>
      <StyledMessageField
        windowWidth={Math.min(
          props.clientProps.windowWidth,
          props.clientProps.windowHeight
        )}
        id="sendInput"
        type="text"
        name="Send"
        placeholder="message"
        value={props.boardProps.chatTextField}
        onChange={(e) => {
          store.dispatch(setNewChatTextField(e));
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter")
            store.dispatch(
              sendMessage(
                props.clientProps.name,
                props.boardProps.chatTextField,
                props.boardProps.lobby
              )
            );
        }}
      ></StyledMessageField>
    </StyledSendMessage>
  );
}

export default SendMessage;
