import store from '../../store.js'

export default function knights(tile) {

    var state = store.getState();
    var board = state.boardProps.board;
    var validMoves = state.boardProps.validMoves;
    var heldPieceColor = tile.pieceColor;

    var row = Number(tile.coord[0]);
    var col = Number(tile.coord[1]);

    board[row][col].validMove = true;
    validMoves.push({row: row, col: col});

    if (row > 0) {
        if (board[row-1][col+2] && board[row-1][col+2].pieceColor !== heldPieceColor) {
            board[row-1][col+2].validMove = true;
            validMoves.push({row: row-1, col: col+2});
        }
        if (board[row-1][col-2] && board[row-1][col-2].pieceColor !== heldPieceColor) {
            board[row-1][col-2].validMove = true;
            validMoves.push({row: row-1, col: col-2});
        }
    }
    if (row > 1) {
        if (board[row-2][col-1] && board[row-2][col-1].pieceColor !== heldPieceColor) {
            board[row-2][col-1].validMove = true;
            validMoves.push({row: row-2, col: col-1});
        }
        if (board[row-2][col+1] && board[row-2][col+1].pieceColor !== heldPieceColor) {
            board[row-2][col+1].validMove = true;
            validMoves.push({row: row-2, col: col+1});
        }
    }
    if (row < 7) {
        if (board[row+1][col+2] && board[row+1][col+2].pieceColor !== heldPieceColor) {
            board[row+1][col+2].validMove = true;
            validMoves.push({row: row+1, col: col+2});
        }
        if (board[row+1][col-2] && board[row+1][col-2].pieceColor !== heldPieceColor) {
            board[row+1][col-2].validMove = true;
            validMoves.push({row: row+1, col: col-2});
        }
    }
    if (row < 6) {
        if (board[row+2][col-1] && board[row+2][col-1].pieceColor !== heldPieceColor) {
            board[row+2][col-1].validMove = true;
            validMoves.push({row: row+2, col: col-1});
        }
        if (board[row+2][col+1] && board[row+2][col+1].pieceColor !== heldPieceColor) {
            board[row+2][col+1].validMove = true;
            validMoves.push({row: row+2, col: col+1});
        }
    }

    return {
        type: 'SET_VALID_MOVES',
        payload: {
            board: board,
            validMoves: validMoves
        }
    }
}