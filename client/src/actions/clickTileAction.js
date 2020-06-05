import store from '../store.js'
import setPlacedPiece from './piecePlaceAction';
import setLiftedPiece from './liftPieceAction.js';

export function setClickedTile(tileProps) {
  var state = store.getState()
  var props = state.boardProps;
  var name = state.clientProps.name
  var coord = tileProps.coord;
  var piece = tileProps.piece;
  var pieceColor = tileProps.pieceColor;
  var tileColor = tileProps.tileColor;
  //if NO piece is currently held
  if (!props.holdingPiece && tileProps.piece && tileProps.pieceColor === props.turn) {
    store.dispatch(setLiftedPiece(coord, piece, pieceColor, tileColor, props.board, props.lobby));
  }

  //if piece is currently being held
  if (props.holdingPiece && tileProps.validMove) {

      var row = Number(coord[0])
      var col = Number(coord[1])

    if (props.heldPiece.piece === "P") {
      //set enPassant if pawn was on the home row and is flanked by an opposite color pawn upon landing
      if (props.heldPiece.pieceColor === 'black' && coord[0] === '3' && props.heldPiece.coord[0] === '1') {
        if ((props.board[row][col+1] !== undefined && props.board[row][col+1].pieceColor === 'white' && props.board[row][col+1].piece === 'P')) {
          props.board[row][col].enPassant = true;
        }
        if ((props.board[row][col-1] !== undefined && props.board[row][col-1].pieceColor === 'white' && props.board[row][col-1].piece === 'P')) {
          props.board[row][col].enPassant = true;
        }
      }

      if (props.heldPiece.pieceColor === 'white' && coord[0] === '4' && props.heldPiece.coord[0] === '6') {
        if ((props.board[row][col+1] !== undefined && props.board[row][col+1].pieceColor === 'black' && props.board[row][col+1].piece === 'P')) {
          props.board[row][col].enPassant = true;
        }
        if ((props.board[row][col-1] !== undefined && props.board[row][col-1].pieceColor === 'black' && props.board[row][col-1].piece === 'P')) {
          props.board[row][col].enPassant = true;
        }
      }

      //capture enPassant pawn
      if (props.heldPiece.pieceColor === 'white' && coord[0] === '2' && props.board[row+1][col].enPassant) {
        props.board[row+1][col].enPassant = false;
        props.board[row+1][col].piece = '';
        props.board[row+1][col].pieceColor = '';
      }
      if (props.heldPiece.pieceColor === 'black' && coord[0] === '5' && props.board[row-1][col].enPassant) {
        props.board[row-1][col].enPassant = false;
        props.board[row-1][col].piece = '';
        props.board[row-1][col].pieceColor = '';
      }
    }

    //upon a valid move being envoked go through the valid move list and revert them all to false.
    var validMoves = props.validMoves
    for (var i = 0; i < validMoves.length; i++) {
      var row = validMoves[i].row;
      var col = validMoves[i].col;
      props.board[row][col].validMove = false;
    }
    validMoves = []

    return function () {
      store.dispatch(setPlacedPiece(coord, props, tileProps, name));
    }
  } else {
    return {
      type: 'NO_ACTION'
    }
  }
}

