import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
  border: 1px solid black;
  boxSizing: border-box;
  background: ${props => props.color};
  textAlign: center;
  position: relative;
`
const StyledPiece = styled.div`
  font-size:  ${props => props.windowHeight*.08}px;
  text-align: center;
  color: ${props => props.color};
`


function Tile (props) {
  // constructor(props) {
  //   super(props);
  //   this.onTileClick = this.onTileClick.bind(this);
  // }

  // onTileClick() {
  //   if (this.props.lobby !== '') {
  //     var coord = this.props.tile.coord;
  //     var piece = this.props.tile.piece;
  //     var pieceColor = this.props.tile.pieceColor;
  //     var tileColor = this.props.tile.tileColor;

  //     if (!this.props.holdingPiece && this.props.tile.piece && this.props.tile.pieceColor === this.props.turn) {
  //       this.props.onLiftPiece(coord, piece, pieceColor, tileColor);
  //     }
  //     if (this.props.holdingPiece && (this.props.tile.pieceColor !== this.props.heldPiece.pieceColor)) {
  //       this.props.onPiecePlace(coord);
  //     }
  //   }
  // }
    return (
      <StyledTile color={this.props.tile.tileColor}>
      <div className='tile' onClick={this.onTileClick}>
      <StyledPiece color={this.props.tile.pieceColor} windowHeight={this.props.windowHeight}>
          <div className='Piece'>
            {this.props.tile.piece}
          </div>
        </StyledPiece>
      </div>
      </StyledTile>
    )
}

export default Tile;