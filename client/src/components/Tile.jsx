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

const StyledPieceImg = styled.div`
  min-width: ${props => props.windowHeight*.08}px;
  max-width: ${props => props.windowHeight*.08}px;
  min-height: ${props => props.windowHeight*.08}px;
  max-height: ${props => props.windowHeight*.08}px;
  background-image: url(https://multiplayer-chess.s3.amazonaws.com/${props => props.piece}.png);
  background-size: contain;
`

function Tile (props) {

    let pieceURL = 'Empty';
    let color;
    
    switch (props.tile.pieceColor) {
      case 'black':
        color = 'Black';
        break;
      case 'white':
        color = 'White';
        break;
    }

    switch (props.tile.piece) {
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
      <StyledTile color={props.tile.tileColor} validMove={props.tile.validMove} coord={props.tile.coord} windowHeight={props.windowHeight}>
        <div className='tileSquare'>
          <StyledPiece color={props.tile.pieceColor} windowHeight={props.windowHeight}>
            <div className='Piece'>
              <StyledPieceImg windowHeight={props.windowHeight} piece={pieceURL}></StyledPieceImg>
            </div>
          </StyledPiece>
        </div>
      </StyledTile>
      
    )
}

export default Tile;