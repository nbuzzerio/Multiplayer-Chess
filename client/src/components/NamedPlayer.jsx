import React from "react";
import styled from "styled-components";
import store from "../store.js";
import setNewTextField from "../actions/textFieldAction.js";
import setNewOrContinueBoard from "../actions/gameStateAction.js";

const StyledButton = styled.button`
  position: relative;
  padding: 20px;

  @media (max-width: 520px) {
    padding: 10px 0;
  }
`;
const StyledInput = styled.input`
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  width: 100%;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 50px;
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledError = styled.p`
  color: red;
`;

const StyledName = styled.p`
  color: white;
  font-size: 24;
  text-transform: capitalize;
`;

function NamedPlayer() {
  var props = store.getState();
  return (
    <StyledContainer>
      <StyledHeader windowWidth={props.windowWidth}>
        <span className="block">Multiplayer</span>{" "}
        <span className="block">Chess</span>
      </StyledHeader>
      <StyledInputWrapper>
        <StyledName>Welcome {props.clientProps.name}</StyledName>
        <StyledButtonWrapper className="button-wrapper">
          <StyledButton
            onClick={() => {
              store.dispatch(
                setNewOrContinueBoard(
                  props.clientProps.textField,
                  props.clientProps.name,
                  true
                )
              );
            }}
          >
            Create a New Game
          </StyledButton>
          <StyledButton
            onClick={() => {
              store.dispatch(
                setNewOrContinueBoard(
                  props.clientProps.textField,
                  props.clientProps.name,
                  false
                )
              );
            }}
          >
            Continue Game
          </StyledButton>
        </StyledButtonWrapper>
        <StyledInput
          type="text"
          name="lobby"
          placeholder="Room Name"
          value={props.clientProps.textField}
          onChange={(e) => {
            store.dispatch(setNewTextField(e));
          }}
        ></StyledInput>
        {props.boardProps.lobbyTaken && (
          <StyledError>{`Sorry ${props.clientProps.name} Lobby taken! Pick a new lobby to play or click continue`}</StyledError>
        )}
      </StyledInputWrapper>
    </StyledContainer>
  );
}

export default NamedPlayer;
