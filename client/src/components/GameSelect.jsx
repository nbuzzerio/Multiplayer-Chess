import React from 'react';
import styled from 'styled-components';
import store from '../store.js';
import Board from './Board.jsx';
import Chat from '../components/Chat.jsx';
import leaveGame from '../actions/leaveAction.js';

const StyledRoom = styled.div`
  display: grid; 
  grid-template-columns: 3fr 10fr 3fr;
`;

const StyledHeldPieceImg = styled.div`
  width: ${props => props.windowHeight*.08}px;
  height: ${props => props.windowHeight*.08}px;
  background-image: url(https://multiplayer-chess.s3.amazonaws.com/${props => props.piece}.png);
  background-size: contain;
  fontSize: ${props => props.windowHeight*.07}px;
  color: props.boardProps.heldPiece.pieceColor;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  boxSizing: 'boarder-box';
  position: 'absolute';
  pointerEvents: 'none';
`;

function GameSelected () {

  var props = store.getState();

  let pieceURL = 'Empty';
  let color;

  let left = props.boardProps.heldPieceLocation.boardXratio * 
  props.clientProps.boardDimensions.width + props.clientProps.boardDimensions.left - props.clientProps.windowHeight*.02;
  let top = props.boardProps.heldPieceLocation.boardYratio * 
  props.clientProps.boardDimensions.height + props.clientProps.boardDimensions.top - props.clientProps.windowHeight*.04;
  
  switch (props.boardProps.heldPiece.pieceColor) {
    case 'black':
      color = 'Black';
      break;
    case 'white':
      color = 'White';
      break;
  }

  switch (props.boardProps.heldPiece.piece) {
    case 'K':
      pieceURL = color + 'King';
      break;
    case 'Q':
      pieceURL = color + 'Queen';
      break;
    case 'B':
      pieceURL = color + 'Bishop';
      break;
    case 'H':
      pieceURL = color + 'Knight';
      break;
    case 'R':
      pieceURL = color + 'Rook';
      break;
    case 'P':
      pieceURL = color + 'Pawn';
      break;
  }

    return (
      <div>
          <h1>{ props.boardProps.lobbyTaken ? `Sorry ${props.clientProps.name} Lobby taken! Pick a new lobby to play a Chess Game`: (props.boardProps.lobby !== '' ? 'Chess Game in Room: ' + props.boardProps.lobby : `Welcome ${props.clientProps.name}! Please enter a room to play a Chess Game`)}</h1>
          <hr></hr>
          <br></br>
          <button onClick={() => {store.dispatch(leaveGame())}}>Leave Game</button>
          <br></br>
          <br></br>
          <hr></hr>
          <h1>{props.boardProps.lobbyExists ? '' : 'Lobby does not exist please create a new game or resume a current lobby.'}</h1>
          <br></br>

          <StyledRoom>
            <div></div>
            <Board />
            <Chat />
          </StyledRoom>

          <StyledHeldPieceImg id='heldPiece' windowHeight={props.windowHeight} left={left} top={top} color={props.boardProps.heldPiece.pieceColor} piece={pieceURL}></StyledHeldPieceImg> 
    </div>     
    )
}

export default GameSelected;




    