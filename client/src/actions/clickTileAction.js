import store from '../store.js'
import setPlacedPiece from './piecePlaceAction';
import setLiftedPiece from './liftPieceAction.js';

export function setClickedTile(tileProps, location) {
  var props = store.getState().boardProps;

    const innerDebounce = (fn, delay) => {
      let lastClick;
      return function(...args) {
        const click = new Date().getTime();
        if (click - lastClick < delay) {
          return;
        }
        lastClick = click;
        return fn(...args);
      }
    }

    const debounce = innerDebounce(location, 50);

      if (props.lobby !== '') {
        var coord = tileProps.coord;
        var piece = tileProps.piece;
        var pieceColor = tileProps.pieceColor;
        var tileColor = tileProps.tileColor;
        //if NO piece is currently held
        if (!props.holdingPiece && tileProps.piece && tileProps.pieceColor === props.turn) {
          store.dispatch(setLiftedPiece(coord, piece, pieceColor, tileColor, props.board, debounce));
        }
        //if piece is currently being held
        if (props.holdingPiece && (tileProps.pieceColor !== props.heldPiece.pieceColor || coord === props.heldPiece.coord)) {
          return function (dispatch) {
            store.dispatch(setPlacedPiece(coord, props, debounce));
          }
        } else {
          return {
            type: 'NO_ACTION'
          }
        }
      } else {
        return {
          type: 'NO_ACTION'
        }
      }
}

