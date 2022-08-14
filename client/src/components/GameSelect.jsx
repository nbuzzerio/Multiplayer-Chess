import React from "react";
import styled from "styled-components";
import store from "../store.js";
import Board from "./Board.jsx";
import Chat from "../components/Chat.jsx";
import leaveGame from "../actions/leaveAction.js";

const StyledRoom = styled.div`
  display: flex;
  margin: 5% 10%;
  position: relative;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH1 = styled.h1`
  color: white;
`;

const StyledLeaveBtn = styled.button`
  height: 100%;
`;

const StyledLChatWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -45%;
  transform: translate(0%, -50%);
  transition: transform .5s ease-out;

  &.clicked {
    transform: translate(-75%, -50%);
  }
`;

function GameSelected() {
  var props = store.getState();

  let left =
    props.boardProps.heldPieceLocation.boardXratio *
      props.clientProps.boardDimensions.width +
    props.clientProps.boardDimensions.left -
    props.clientProps.windowWidth * 0.02;
  let top =
    props.boardProps.heldPieceLocation.boardYratio *
      props.clientProps.boardDimensions.height +
    props.clientProps.boardDimensions.top -
    props.clientProps.windowWidth * 0.04;

  return (
    <div>
      <hr></hr>
      <StyledHeader>
        <StyledH1>
          {props.boardProps.lobbyTaken
            ? `Sorry ${props.clientProps.name} Lobby taken! Pick a new lobby to play a Chess Game`
            : props.boardProps.lobby !== ""
            ? "Chess Game in Room: " + props.boardProps.lobby
            : `Welcome ${props.clientProps.name}! Please enter a room to play a Chess Game`}
        </StyledH1>
        <StyledLeaveBtn
          onClick={() => {
            store.dispatch(leaveGame());
          }}
        >
          Leave Game
        </StyledLeaveBtn>
      </StyledHeader>
      <hr></hr>
      <StyledH1>
        {props.boardProps.lobbyExists
          ? ""
          : "Lobby does not exist please create a new game or resume a current lobby."}
      </StyledH1>

      <StyledRoom>
        <Board />
        <StyledLChatWrapper id="chat-wrapper">
          <Chat />
        </StyledLChatWrapper>
      </StyledRoom>

      <div
        id="heldPiece"
        style={{
          backgroundImage: `url(https://multiplayer-chess.s3.amazonaws.com/${props.boardProps.heldPiece.pieceURL}.png)`,
          width: `${props.windowWidth * 0.08}px`,
          height: `${props.windowWidth * 0.08}px`,
          backgroundSize: "contain",
          fontSize: `${props.windowWidth * 0.07}px`,
          color: `${props.boardProps.heldPiece.pieceColor}`,
          left: `${left}px`,
          top: `${top}px`,
          boxSizing: "boarder-box",
          position: "absolute",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}

export default GameSelected;
