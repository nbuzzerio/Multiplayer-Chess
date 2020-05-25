import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
  border: 1px solid black;
  boxSizing: border-box;
  min-width: ${props => props.windowHeight*.08}px;
  min-height: ${props => props.windowHeight*.08}px;
  background: ${props => props.color};
  textAlign: center;
  position: relative;
`
const StyledPiece = styled.div`
  font-size:  ${props => props.windowHeight*.07}px;
  text-align: center;
  color: ${props => props.color};
`


function Tile (props) {
  
    return (
      <StyledTile color={props.tile.tileColor} windowHeight={props.windowHeight}>
        <div className='tile'>
          <StyledPiece color={props.tile.pieceColor} windowHeight={props.windowHeight}>
            <div className='Piece'>
              {props.tile.piece}
            </div>
          </StyledPiece>
        </div>
      </StyledTile>
      
    )
}

export default Tile;