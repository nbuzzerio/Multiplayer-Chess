import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
  border: ${props => props.validMove ? '1px solid black' : '3px solid green'};
  border-top: ${props => props.coord[0] === '0' ? (props.validMove ? '3px solid green' : '2px solid black') : (props.validMove ? '3px solid green' : '1px solid black')};
  border-right: ${props => props.coord[1] === '7' ? (props.validMove ? '3px solid green' : '2px solid black') : (props.validMove ? '3px solid green' : '1px solid black')};
  border-bottom: ${props => props.coord[0] === '7' ? (props.validMove ? '3px solid green' : '2px solid black') : (props.validMove ? '3px solid green' : '1px solid black')};
  border-left: ${props => props.coord[1] === '0' ? (props.validMove ? '3px solid green' : '2px solid black') : (props.validMove ? '3px solid green' : '1px solid black')};
  box-sizing: border-box;
  min-width: ${props => props.windowHeight*.08}px;
  max-width: ${props => props.windowHeight*.08}px;
  min-height: ${props => props.windowHeight*.08}px;
  max-height: ${props => props.windowHeight*.08}px;
  background: ${props => props.color};
  text-align: center;
  position: relative;
`
const StyledPiece = styled.div`
  font-size:  ${props => props.windowHeight*.07}px;
  text-align: center;
  color: ${props => props.color};
  user-select: none;
  overflow: hidden;
`


function Tile (props) {
    return (
      <StyledTile color={props.tile.tileColor} validMove={props.tile.validMove} coord={props.tile.coord} windowHeight={props.windowHeight}>
        <div className='tileSquare'>
          <StyledPiece color={props.tile.pieceColor} windowHeight={props.windowHeight}>
            <div className='Piece'>
              {props.tile.piece || ''}
            </div>
          </StyledPiece>
        </div>
      </StyledTile>
      
    )
}

export default Tile;