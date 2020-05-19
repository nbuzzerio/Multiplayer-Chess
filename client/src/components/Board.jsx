import React from 'react';
import Tile from './Tile.jsx';
import styled from 'styled-components';

const StyledBoard = styled.div`
  border: ${props => props.windowHeight*.01}px solid tan;
  height: ${props => props.windowHeight*.88}px;
  width: ${props => props.windowHeight*.88}px;
  boxSizing: border-box;
  margin: auto;
`;

const StyledSquares = styled.div`
  display: grid;
  grid-template-columns: repeat(8, ${props => props.windowHeight*.11}px);
  grid-template-rows: repeat(8, ${props => props.windowHeight*.11}px);
`;

function Board(props) {
  const rows = props.board;  //figure out why there are 2 board keys to get to the array

  //going through matrix rows then through each row and grabbing tiles
  const rowsList = rows.map((row, colIndex) => { 
      return row.map((tile, rowIndex) => {
        // debugger;
        // {console.log(`${colIndex}${rowIndex}`, ': ', tile)}
        return (
          <div className='rows' onClick={() => {props.onTileClick(tile)}}>
            <Tile tile={tile} holdingPiece={props.holdingPiece} heldPiece={props.heldPiece} turn={props.turn} lobby={props.lobby} key={rowIndex + '' + colIndex} windowHeight={props.windowHeight} onTileClick={props.onTileClick}/>
          </div>
        )
      })
  })

  return (
    <StyledBoard windowHeight={props.windowHeight}>
      <div className='board'>
        <StyledSquares windowHeight={props.windowHeight}>
          {rowsList}
        </StyledSquares>
      </div>
    </StyledBoard>
  );
}

export default Board;