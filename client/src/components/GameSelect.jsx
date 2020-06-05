import React from 'react';
import styled from 'styled-components';
import store from '../store.js'
import Board from './Board.jsx';
import Chat from '../components/Chat.jsx';
import leaveGame from '../actions/leaveAction.js';

const StyledRoom = styled.div`
  display: grid; 
  grid-template-columns: 3fr 10fr 3fr;
`;

function GameSelected () {
  
  var props = store.getState();

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

        <div id='heldPiece' style={{fontSize: `${window.innerHeight*.07}px`, color: props.boardProps.heldPiece.pieceColor, 
        
        left: `${props.boardProps.heldPieceLocation.boardXratio * 
          props.clientProps.boardDimensions.width + props.clientProps.boardDimensions.left - props.clientProps.windowHeight*.02
        }px`, 
        
        top: `${props.boardProps.heldPieceLocation.boardYratio * 
          props.clientProps.boardDimensions.height + props.clientProps.boardDimensions.top - props.clientProps.windowHeight*.04
        }px`,
        
      boxSizing: 'boarder-box', position: 'absolute', pointerEvents: 'none'}}>{props.boardProps.heldPiece.piece}</div> 
    </div>     
    )
}

export default GameSelected;




    