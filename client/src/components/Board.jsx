import React from 'react';
import Tile from './Tile.jsx';
import styled from 'styled-components';

const StyledBoard = styled.div`
  border: ${props => props.windowHeight*.01}px solid tan;
  height: ${props => props.windowHeight*.64}px;
  width: ${props => props.windowHeight*.64}px;
  boxSizing: border-box;
  margin: auto;
`;

const StyledSquares = styled.div`
  display: grid;
  grid-template-columns: repeat(8, ${props => props.windowHeight*.08}px);
  grid-template-rows: repeat(8, ${props => props.windowHeight*.08}px);
`;

function Board(props) {
  const rows = props.board;  //figure out why there are 2 board keys to get to the array
  
  //going through matrix rows then through each row and grabbing tiles
  var rowsList = rows.map((row, colIndex) => { 
      return row.map((tile, rowIndex) => {
        return (
          <div className='rows' onClick={() => {props.onTileClick(tile, props.setHeldPieceLocation)}} key={rowIndex}>
            <Tile tile={tile} holdingPiece={props.holdingPiece} heldPiece={props.heldPiece} turn={props.turn} lobby={props.lobby} key={rowIndex + '' + colIndex} windowHeight={props.windowHeight} onTileClick={props.onTileClick}/>
          </div>
        )
      })
  })
  var greeting = <div className='welcomeMsg'></div>
  if (props.lobby === '') {
    rowsList = <div></div> //removes board
    greeting = 
    <div className='welcomeMsg'>
      <h1>To Start a Game Type the Name of your Lobby and Click New Game</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>To Continue a Game Type the Name of your Lobby and Click Continue Game</h1>
    </div>
  }

  return (
    <StyledBoard windowHeight={props.windowHeight}>
      <div id='board'>
        {greeting}
        <StyledSquares windowHeight={props.windowHeight}>
          {rowsList}
        </StyledSquares>
      </div>
    </StyledBoard>
  );
}

export default Board;