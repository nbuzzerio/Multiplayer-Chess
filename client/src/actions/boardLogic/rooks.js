import store from '../../store.js'

export default function rooks(tile) {

    var state = store.getState();
    var board = state.boardProps.board;
    var validMoves = state.boardProps.validMoves;
    var heldPieceColor = tile.pieceColor;

    var row = Number(tile.coord[0]);
    var col = Number(tile.coord[1]);
    
    board[row][col].validMove = true;
    validMoves.push({row: row, col: col});

    let rowPlus = row+1;
    let rowMinus = row-1;
    while (rowPlus < 8 ) {
        if (board[rowPlus][col].pieceColor === '') {
            board[rowPlus][col].validMove = true;
            validMoves.push({row: rowPlus, col: col});
            rowPlus++;
        } else if (board[rowPlus][col].pieceColor !== heldPieceColor) {
            board[rowPlus][col].validMove = true;
            validMoves.push({row: rowPlus, col: col});
            rowPlus = 8;
        } else {
            rowPlus = 8;
        }
    }
    while (rowMinus > -1 ) {
        if (board[rowMinus][col].pieceColor === '') {
            board[rowMinus][col].validMove = true;
            validMoves.push({row: rowMinus, col: col});
            rowMinus--;
        } else if (board[rowMinus][col].pieceColor !== heldPieceColor) {
            board[rowMinus][col].validMove = true;
            validMoves.push({row: rowMinus, col: col});
            rowMinus = -1;
        } else {
            rowMinus = -1;
        }
    }

    let colPlus = col+1;
    let colMinus = col-1;
    while (colPlus < 8 ) {
        if (board[row][colPlus].pieceColor === '') {
            board[row][colPlus].validMove = true;
            validMoves.push({row: row, col: colPlus});
            colPlus++;
        } else if (board[row][colPlus].pieceColor !== heldPieceColor) {
            board[row][colPlus].validMove = true;
            validMoves.push({row: row, col: colPlus});
            colPlus = 8;
        } else {
            colPlus = 8;
        }
    }
    while (colMinus > -1 ) {
        if (board[row][colMinus].pieceColor === '') {
            board[row][colMinus].validMove = true;
            validMoves.push({row: row, col: colMinus});
            colMinus--;
        } else if (board[row][colMinus].pieceColor !== heldPieceColor) {
            board[row][colMinus].validMove = true;
            validMoves.push({row: row, col: colMinus});
            colMinus = -1;
        } else {
            colMinus = -1;
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