export function setLiftedPiece(coord, piece, pieceColor, tileColor) {

    function onLiftPiece(coord, piece, pieceColor, tileColor) {
      var row = Number(coord[0]);
      var col = Number(coord[1]);
      var board = this.state.board;
      board[row][col].tileColor = 'green';
      
      return {
          type: 'SET_LIFTED_PIECE',
          payload: {board: board,
            holdingPiece: true, 
            heldPiece: {
              coord: coord,
              piece: piece,
              pieceColor: pieceColor,
              tileColor: tileColor
            }
          }
      }
    }

    return onLiftPiece(coord, piece, pieceColor, tileColor);
}

