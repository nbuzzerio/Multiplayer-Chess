import React from 'react';
import Tile from './Tile.jsx';
import styled from 'styled-components';

const StyledBoard = styled.div`
  border: 15px solid tan;
  height: 720px;
  width: 720px;
  boxSizing: border-box;
  margin: auto;
`;

const StyledSquares = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 90px);
  grid-template-rows: repeat(8, 90px);
`;


function Board(props) {
  const rows = props.board;
  
  //going through matrix rows then through each row and grabbing tiles
  const rowsList = rows.map((row, colIndex) => { 
    // debugger;
      return row.map((tile, rowIndex) => {
        // debugger;
        {console.log(`${colIndex}${rowIndex}`, ': ', tile)}
        return <Tile tile={tile} holdingPiece={props.holdingPiece} heldPiece={props.heldPiece} turn={props.turn} lobby={props.lobby} key={rowIndex + '' + colIndex}/>
      })
  })

  return (
    <StyledBoard>
      <div className='board'>
        <StyledSquares>
        {console.log(rowsList)}
          {rowsList}
        </StyledSquares>
      </div>
    </StyledBoard>
  );
}

export default Board;