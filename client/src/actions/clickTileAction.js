import store from '../store.js'
import setPlacedPiece from './piecePlaceAction';
import setLiftedPiece from './liftPieceAction.js';

export function setClickedTile(tileProps) {
  var props = store.getState().boardProps;
    function onTileClick(props, tileProps) {
        if (props.lobby !== '') {
          var coord = tileProps.coord;
          var piece = tileProps.piece;
          var pieceColor = tileProps.pieceColor;
          var tileColor = tileProps.tileColor;
          
          //if NO piece is currently held
          if (!props.holdingPiece && tileProps.piece && tileProps.pieceColor === props.turn) {
            store.dispatch(setLiftedPiece(coord, piece, pieceColor, tileColor, props.board));
          }
          //if piece is currently being held
          if (props.holdingPiece && (tileProps.pieceColor !== props.heldPiece.pieceColor || coord === props.heldPiece.coord)) {
            store.dispatch(setPlacedPiece(coord, props));
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
  return onTileClick(props, tileProps);
}
