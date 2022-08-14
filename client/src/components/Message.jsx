import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  font-size: ${(props) => props.windowWidth * 0.025}px;
  word-wrap: break-word;
  max-width: ${(props) => props.windowWidth * 0.32}px;
`;

function Message(props) {
  return (
    <StyledMessage id="message" windowWidth={props.windowWidth}>
      {props.message.name}: {props.message.message}
    </StyledMessage>
  );
}

export default Message;
