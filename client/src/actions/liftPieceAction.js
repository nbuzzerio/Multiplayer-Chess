export default function setLiftedPiece(coord, piece, pieceColor, tileColor, board) {

    var row = Number(coord[0]);
    var col = Number(coord[1]);
    board[row][col].tileColor = 'green';

    //also remove the held piece from the board
    board[row][col].piece = '';
    const held = document.getElementById('heldPiece');
    held.innerHTML = piece;
    held.style.color = pieceColor;
    
    held.style.fontSize = `${window.innerHeight*.07}px`; //make this dynamic

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
