import setHeldPieceLocation from './heldPieceLocationAction.js';

export default function setLiftedPiece(coord, piece, pieceColor, tileColor, board, lobby) {
    var row = Number(coord[0]);
    var col = Number(coord[1]);
    board[row][col].tileColor = 'green';
    //also remove the held piece from the board
    board[row][col].piece = '';
    const held = document.getElementById('heldPiece');
    held.innerHTML = piece;
    held.style.color = pieceColor;
    
    document.addEventListener('mousemove', setHeldPieceLocation);

    return {
      type: 'server/SET_LIFTED_PIECE',
      payload: {board: board,
        holdingPiece: true, 
        heldPiece: {
          coord: coord,
          piece: piece,
          pieceColor: pieceColor,
          tileColor: tileColor
        },
        heldPieceLocation: {
          boardXratio: -1000,
          boardYratio: -1000
        },
        lobby: lobby
      }
    }
}