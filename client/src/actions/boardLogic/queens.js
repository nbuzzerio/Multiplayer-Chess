import store from '../../store.js'

export default function queens(tile) {

    var state = store.getState();
    var board = state.boardProps.board;
    var validMoves = state.boardProps.validMoves;
    var heldPieceColor = tile.pieceColor;

    var row = Number(tile.coord[0]);
    var col = Number(tile.coord[1]);

    //placing the piece back down will always be valid
    board[row][col].validMove = true;
    validMoves.push({row: row, col: col});

    //////////////////////////////////////////////////////////////////////////
    //                          Rook-Like Movement                          //
    //////////////////////////////////////////////////////////////////////////
    var rowPlus = row+1;
    var rowMinus = row-1;
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

    var colPlus = col+1;
    var colMinus = col-1;
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

    //////////////////////////////////////////////////////////////////////////
    //                         Bishop-Like Movement                         //
    //////////////////////////////////////////////////////////////////////////
    var rowPlus = row+1;
    var colPlus = col+1;
    var colMinus = col-1;

    //bottom right
    while (rowPlus < 8 && colPlus < 8) {
        if (board[rowPlus][colPlus].pieceColor === '') {
            board[rowPlus][colPlus].validMove = true;
            validMoves.push({row: rowPlus, col: colPlus});
            rowPlus++;
            colPlus++;
        } else if (board[rowPlus][colPlus].pieceColor !== heldPieceColor) {
            board[rowPlus][colPlus].validMove = true;
            validMoves.push({row: rowPlus, col: colPlus});
            rowPlus = 8;
            colPlus = 8;
        } else {
            rowPlus = 8;
            colPlus = 8;
        }
    }

    var rowPlus = row+1; 
    //bottom left
    while (rowPlus < 8 && colMinus > -1) {
        if (board[rowPlus][colMinus].pieceColor === '') {
            board[rowPlus][colMinus].validMove = true;
            validMoves.push({row: rowPlus, col: colMinus});
            rowPlus++;
            colMinus--;
        } else if (board[rowPlus][colMinus].pieceColor !== heldPieceColor) {
            board[rowPlus][colMinus].validMove = true;
            validMoves.push({row: rowPlus, col: colMinus});
            rowPlus = 8;
            colMinus = -1;
        } else {
            rowPlus = 8;
            colMinus = -1;
        }
    }

    var rowMinus = row-1;
    var colPlus = col+1;
    var colMinus = col-1;

    //top right
    while (rowMinus > -1 && colPlus < 8) {
        if (board[rowMinus][colPlus].pieceColor === '') {
            board[rowMinus][colPlus].validMove = true;
            validMoves.push({row: rowMinus, col: colPlus});
            rowMinus--;
            colPlus++;
        } else if (board[rowMinus][colPlus].pieceColor !== heldPieceColor) {
            board[rowMinus][colPlus].validMove = true;
            validMoves.push({row: rowMinus, col: colPlus});
            rowMinus = -1;
            colPlus = 8;
        } else {
            rowMinus = -1;
            colPlus = 8;
        }
    }

    var rowMinus = row-1;
    //top left
    while (rowMinus > -1 && colMinus > -1) {
        if (board[rowMinus][colMinus].pieceColor === '') {
            board[rowMinus][colMinus].validMove = true;
            validMoves.push({row: rowMinus, col: colMinus});
            rowMinus--;
            colMinus--;
        } else if (board[rowMinus][colMinus].pieceColor !== heldPieceColor) {
            board[rowMinus][colMinus].validMove = true;
            validMoves.push({row: rowMinus, col: colMinus});
            rowMinus = -1;
            colMinus = -1;
        } else {
            rowMinus = -1;
            colMinus = -1;
        }
    }
    //////////////////////////////////////////////////////////////////////////

    return {
        type: 'SET_VALID_MOVES',
        payload: {
            board: board,
            validMoves: validMoves
        }
    }
}