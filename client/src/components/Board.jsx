import React from 'react';
import Tile from './Tile.jsx';
import styled from 'styled-components';
import store from '../store.js'
import { setClickedTile } from '../actions/clickTileAction.js';
import { setValidMoves } from '../actions/setValidMoves.js';

const StyledBoard = styled.div`
  border: ${props => props.windowHeight*.01}px solid tan;
  height: ${props => props.windowHeight*.64}px;
  width: ${props => props.windowHeight*.64}px;
  margin: auto;
`;

const StyledSquares = styled.div`
  display: grid;
  grid-template-columns: repeat(8, ${props => props.windowHeight*.08}px);
  grid-template-rows: repeat(8, ${props => props.windowHeight*.08}px);
`;

function Board() {
  const props = store.getState();

  const rows = props.boardProps.board;
  
  //going through matrix rows then through each row and grabbing tiles
  var tilesList = rows.map((row, rowIndex) => { 
      return row.map((tile, colIndex) => {
        return (
          <div className='tile' onClick={() => {
            setValidMoves(tile);
            store.dispatch(setClickedTile(tile)); 
            }} key={rowIndex + '' + colIndex}>
            <Tile tile={tile} holdingPiece={props.boardProps.holdingPiece} heldPiece={props.boardProps.heldPiece} turn={props.boardProps.turn} lobby={props.boardProps.lobby} key={rowIndex + '' + colIndex} windowHeight={props.clientProps.windowHeight} onTileClick={props.onTileClick}/>
          </div>
        )
      })
  })

  return (
    <StyledBoard windowHeight={props.clientProps.windowHeight}>
      <div id='board'>
        <StyledSquares windowHeight={props.clientProps.windowHeight}>
          {tilesList}
        </StyledSquares>
      </div>
    </StyledBoard>
    
  );
}

export default Board;