export default function setLiftedPiece(coord, piece, pieceColor, tileColor, board) {

    function onLiftPiece(coord, piece, pieceColor, tileColor, board) {
      var row = Number(coord[0]);
      var col = Number(coord[1]);
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

    return onLiftPiece(coord, piece, pieceColor, tileColor, board);
}