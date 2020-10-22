import setHeldPieceLocation from './heldPieceLocationAction.js';
import store from '../store.js';

export default function setLiftedPiece(coord, piece, pieceColor, tileColor, board, lobby) {
    var row = Number(coord[0]);
    var col = Number(coord[1]);
    board[row][col].tileColor = 'green';
    //also remove the held piece from the board
    board[row][col].piece = '';
    const held = document.getElementById('heldPiece');

    let pieceURL;
    let color;

    switch (pieceColor) {
      case 'black':
        color = 'Black';
        break;
      case 'white':
        color = 'White';
        break;
    }
  
    switch (piece) {
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

    var props = store.getState();

    held.style.color = pieceColor;
    held.style.backgroundImage = `url(https://multiplayer-chess.s3.amazonaws.com/${pieceURL}.png)`;
    held.style.width = `${props.clientProps.windowHeight*.08}px`;
    held.style.height = `${props.clientProps.windowHeight*.08}px`;
    held.style.backgroundSize = 'contain';
    held.style.boxSizing = 'boarder-box';
    held.style.position = 'absolute';
    held.style.pointerEvents = 'none';

    document.addEventListener('mousemove', setHeldPieceLocation);

    return {
      type: 'server/SET_LIFTED_PIECE',
      payload: {
        board: board,
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