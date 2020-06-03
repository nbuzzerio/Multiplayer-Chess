import store from '../store.js'
import pawns from './boardLogic/pawns.js'
import rooks from './boardLogic/rooks.js'
import knights from './boardLogic/knights.js'
import bishops from './boardLogic/bishops.js'
import queens from './boardLogic/queens.js'
import kings from './boardLogic/kings.js'

export function setValidMoves(tileProps) {
    const piece = tileProps.piece
    const color = tileProps.pieceColor
    const state = store.getState();
    if (!state.boardProps.holdingPiece) {
        if (state.boardProps.turn === color) {
            if (piece === 'P') {
                store.dispatch(pawns(tileProps));
            } else if (piece === 'R') {
                store.dispatch(rooks(tileProps));
            } else if (piece === 'H') {
                store.dispatch(knights(tileProps));
            } else if (piece === 'B') {
                store.dispatch(bishops(tileProps));
            } else if (piece === 'Q') {
                store.dispatch(queens(tileProps));
            } else if (piece === 'K') {
                store.dispatch(kings(tileProps));
            }
        }
    }
}