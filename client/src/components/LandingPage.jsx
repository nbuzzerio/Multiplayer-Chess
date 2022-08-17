import React from "react";
import styled from "styled-components";
import store from "../store.js";
import setNewTextField from "../actions/textFieldAction.js";
import setName from "../actions/playerAction.js";

const StyledButton = styled.button`
  position: relative;
  padding: 20px;

  @media (max-width: 520px) {
    padding: 10px 0;
  }
`;
const StyledInput = styled.input`
  position: relative;
  padding: 20px;

  @media (max-width: 520px) {
    padding: 10px;
  }
`;

const StyledHeader = styled.h1`
  top: ${(props) => props.windowWidth * 0.2}px;
  font-size: 200px;
  text-align: center;
  font-family: fantasy;
  background-image: url(https://multiplayer-chess.s3.amazonaws.com/chess-pieces.jpg);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-transform: uppercase;
  background-size: cover;
  background-position: center;
  font-weight: 900;

  @media (max-width: 1100px) {
    font-size: 150px;
  }

  @media (max-width: 800px) {
    font-size: 125px;
  }

  @media (max-width: 650px) {
    font-size: 96px;
  }

  @media (max-width: 520px) {
    font-size: 72px;
  }

  @media (max-width: 400px) {
    font-size: 60px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 50px;
`;

function LandingPage() {
  var props = store.getState().clientProps;

  return (
    <StyledContainer>
      <StyledHeader windowWidth={props.windowWidth}>
        <span className="block">Multiplayer</span>{" "}
        <span className="block">Chess</span>
      </StyledHeader>
      <StyledInputWrapper>
        <StyledButton
          windowWidth={props.windowWidth}
          windowHeight={props.windowHeight}
          onClick={() => {
            store.dispatch(setName(props.textField));
          }}
        >
          Enter Name
        </StyledButton>
        <StyledInput
          type="text"
          name="Enter Name"
          placeholder="Player Name"
          value={props.textField}
          windowWidth={props.windowWidth}
          windowHeight={props.windowHeight}
          onChange={(e) => {
            store.dispatch(setNewTextField(e));
          }}
        ></StyledInput>
      </StyledInputWrapper>
    </StyledContainer>
  );
}

export default LandingPage;
